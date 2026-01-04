const fs = require('fs');
const path = require('path');

// 读取类型定义文件，获取所有必需的属性
const typeContent = fs.readFileSync('./src/type.ts', 'utf-8');
const localeDataMatch = typeContent.match(/export interface LocaleData \{([\s\S]*?)\}/);

if (!localeDataMatch) {
  console.error('未找到 LocaleData 接口定义');
  process.exit(1);
}

// 解析接口定义，提取所有属性名
const interfaceContent = localeDataMatch[1];
// 匹配属性定义，包括嵌套的接口定义
const propertyRegex = /([a-zA-Z0-9_$]+)(\??):\s*(\w+|{[\s\S]*?})/g;
const properties = new Set();

let match;
while ((match = propertyRegex.exec(interfaceContent)) !== null) {
  const propName = match[1];
  const propType = match[3];
  
  // 如果是嵌套对象类型，将其展开
  if (propType.trim().startsWith('{')) {
    // 解析嵌套对象
    const nestedProps = extractNestedProperties(propType);
    console.log(`${propName} 包含嵌套属性:`, nestedProps);
  } else {
    properties.add(propName);
  }
}

// 提取嵌套属性的辅助函数
function extractNestedProperties(typeStr) {
  const nestedProps = new Set();
  // 找到所有嵌套的属性定义
  const nestedRegex = /([a-zA-Z0-9_$]+)(\??):\s*[^,}]+/g;
  let nestedMatch;
  while ((nestedMatch = nestedRegex.exec(typeStr)) !== null) {
    const nestedPropName = nestedMatch[1];
    if (nestedPropName && nestedPropName.trim()) {
      nestedProps.add(nestedPropName);
    }
  }
  return nestedProps;
}

// 获取所有语言文件
const localesDir = './src/locales/';
const localeFiles = fs.readdirSync(localesDir).filter(file => 
  file.endsWith('.ts') && file !== 'index.ts' // 排除 index.ts 如果存在
);

console.log('检查以下语言文件:');
localeFiles.forEach(file => console.log(`- ${file}`));

// 检查每个语言文件
for (const file of localeFiles) {
  const filePath = path.join(localesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // 简单检查是否包含 formats 部分和 formatRecommendation 属性
  if (content.includes('formats: {')) {
    if (!content.includes('formatRecommendation')) {
      console.log(`❌ ${file} 缺少 formatRecommendation 属性`);
    } else {
      console.log(`✅ ${file} 包含 formatRecommendation 属性`);
    }
  } else {
    console.log(`⚠️ ${file} 没有找到 formats 部分`);
  }
  
  // 检查是否包含其他可能缺失的属性
  const missingProps = [];
  if (!content.includes('antLocale')) missingProps.push('antLocale');
  if (!content.includes('logo')) missingProps.push('logo');
  if (!content.includes('initial')) missingProps.push('initial');
  if (!content.includes('previewHelp')) missingProps.push('previewHelp');
  
  if (missingProps.length > 0) {
    console.log(`❌ ${file} 缺少以下基本属性:`, missingProps);
  } else {
    console.log(`✅ ${file} 包含所有基本属性`);
  }
}

console.log('\n检查完成！');