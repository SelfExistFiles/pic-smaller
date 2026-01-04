const fs = require('fs');

// Read the type definition to get all required properties
const typeContent = fs.readFileSync('./src/type.ts', 'utf8');
console.log('Looking for formats interface...');

// Find the formats interface definition
const lines = typeContent.split('\n');
let inFormatsInterface = false;
const typeProps = [];

for (let i = 0; i < lines.length; i++) {  // Check all lines to find formats interface
  const originalLine = lines[i];
  const trimmedLine = originalLine.trim();
  
  if (trimmedLine.includes('formats: {')) {
    inFormatsInterface = true;
    continue;
  }
  
  if (inFormatsInterface) {
    // Check if this line contains a property definition like "propName: string;"
    const propMatch = originalLine.match(/^\s*(\w+):\s*string;/);
    if (propMatch) {
      typeProps.push(propMatch[1]);
    }
    
    // If we encounter the closing brace, we've finished reading the interface
    if (trimmedLine.includes('};')) {
      break;
    }
  }
}

console.log('Required formats properties:', typeProps);

// Check each locale file
const localeFiles = [
  'en-US.ts',
  'es-ES.ts',
  'fr-FR.ts',
  'ja-JP.ts',
  'ko-KR.ts',
  'tr-TR.ts',
  'zh-CN.ts',
  'zh-TW.ts'
];

localeFiles.forEach(file => {
  const content = fs.readFileSync('./src/locales/' + file, 'utf8');
  const contentLines = content.split('\n');
  let inFormatsSection = false;
  const presentProps = [];
  
  // Find the start of formats section
  let formatsStartLine = -1;
  for (let i = 0; i < contentLines.length; i++) {
    if (contentLines[i].trim().includes('formats: {')) {
      formatsStartLine = i;
      break;
    }
  }
  
  if (formatsStartLine !== -1) {
    // Now find where the formats section ends (before the next property)
    for (let i = formatsStartLine + 1; i < contentLines.length; i++) {
      const line = contentLines[i].trim();
      
      // If we see a closing brace followed by a comma, that's likely the end
      if (line.includes('},') && !line.includes('supportedFormats')) {
        break;
      }
      
      // Check if this line contains a property
      const propMatch = line.match(/^\s*(\w+):\s*.+$/);
      if (propMatch) {
        // Only add if it's one of our required properties
        if (typeProps.includes(propMatch[1])) {
          presentProps.push(propMatch[1]);
        }
      }
    }
  }
  
  const missingProps = typeProps.filter(prop => !presentProps.includes(prop));
  if (missingProps.length > 0) {
    console.log(file + ' is missing properties: ' + missingProps.join(', '));
  } else {
    console.log(file + ' has all properties');
  }
});