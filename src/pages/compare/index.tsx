import { observer } from "mobx-react-lite";
import { Card, Flex, Table, Typography, Tag } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useResponse } from "@/media";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const Compare = observer(() => {
  const { isPC } = useResponse();

  const comparisonData = [
    {
      key: '1',
      feature: gstate.locale?.compare?.featurePrivacy || '隐私安全',
      picSmaller: gstate.locale?.compare?.featurePrivacyDesc || '本地处理，不上传服务器',
      toolA: gstate.locale?.compare?.toolAprivacy || '上传服务器处理',
      toolB: gstate.locale?.compare?.toolBprivacy || '本地处理，部分上传',
      toolC: gstate.locale?.compare?.toolCprivacy || '服务器处理',
    },
    {
      key: '2',
      feature: gstate.locale?.compare?.featureFormats || '支持格式',
      picSmaller: gstate.locale?.compare?.picSmallerFormats || 'JPEG, PNG, WEBP, AVIF, SVG, GIF',
      toolA: gstate.locale?.compare?.toolAFormats || 'JPEG, PNG',
      toolB: gstate.locale?.compare?.toolBFormats || 'JPEG, PNG, WEBP',
      toolC: gstate.locale?.compare?.toolCFormats || 'JPEG, PNG, GIF',
    },
    {
      key: '3',
      feature: gstate.locale?.compare?.featureAlgorithm || '压缩算法',
      picSmaller: gstate.locale?.compare?.picSmallerAlgorithm || '先进算法，高质量',
      toolA: gstate.locale?.compare?.toolAAlgorithm || '基础算法',
      toolB: gstate.locale?.compare?.toolBAlgorithm || '中等算法',
      toolC: gstate.locale?.compare?.toolCAlgorithm || '基础算法',
    },
    {
      key: '4',
      feature: gstate.locale?.compare?.featureBatch || '批量处理',
      picSmaller: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      toolA: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      toolB: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
      toolC: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    },
    {
      key: '5',
      feature: gstate.locale?.compare?.featureLossless || '无损压缩',
      picSmaller: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      toolA: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
      toolB: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      toolC: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
    },
    {
      key: '6',
      feature: gstate.locale?.compare?.featureResize || '尺寸调整',
      picSmaller: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      toolA: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      toolB: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
      toolC: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    },
    {
      key: '7',
      feature: gstate.locale?.compare?.featureFree || '完全免费',
      picSmaller: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      toolA: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
      toolB: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      toolC: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
    },
    {
      key: '8',
      feature: gstate.locale?.compare?.featureAdFree || '无广告',
      picSmaller: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      toolA: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
      toolB: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      toolC: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
    },
  ];

  const toolColumns = [
    {
      title: gstate.locale?.compare?.featureTitle || '功能特性',
      dataIndex: 'feature',
      key: 'feature',
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: 'Pic Smaller',
      dataIndex: 'picSmaller',
      key: 'picSmaller',
      render: (text: any) => {
        if (typeof text === 'string') {
          return <Text>{text}</Text>;
        }
        return text;
      },
    },
    {
      title: gstate.locale?.compare?.toolATitle || '工具 A',
      dataIndex: 'toolA',
      key: 'toolA',
      render: (text: any) => {
        if (typeof text === 'string') {
          return <Text type="secondary">{text}</Text>;
        }
        return text;
      },
    },
    {
      title: gstate.locale?.compare?.toolBTitle || '工具 B',
      dataIndex: 'toolB',
      key: 'toolB',
      render: (text: any) => {
        if (typeof text === 'string') {
          return <Text type="secondary">{text}</Text>;
        }
        return text;
      },
    },
    {
      title: gstate.locale?.compare?.toolCTitle || '工具 C',
      dataIndex: 'toolC',
      key: 'toolC',
      render: (text: any) => {
        if (typeof text === 'string') {
          return <Text type="secondary">{text}</Text>;
        }
        return text;
      },
    },
  ];

  const advantages = [
    {
      title: gstate.locale?.compare?.advantagePrivacy || '完全隐私保护',
      description: gstate.locale?.compare?.advantagePrivacyDesc || '所有处理在本地完成，图片永远不会上传到服务器',
      icon: <CheckCircleOutlined style={{ fontSize: 24, color: '#52c41a' }} />
    },
    {
      title: gstate.locale?.compare?.advantageFormat || '支持最多格式',
      description: gstate.locale?.compare?.formatDesc || '支持 JPEG, PNG, WEBP, AVIF, SVG, GIF 等多种格式',
      icon: <CheckCircleOutlined style={{ fontSize: 24, color: '#52c41a' }} />
    },
    {
      title: gstate.locale?.compare?.advantageQuality || '最高压缩质量',
      description: gstate.locale?.compare?.advantageQualityDesc || '使用先进的压缩算法，保持最佳图片质量',
      icon: <CheckCircleOutlined style={{ fontSize: 24, color: '#52c41a' }} />
    },
    {
      title: gstate.locale?.compare?.advantageFree || '完全免费使用',
      description: gstate.locale?.compare?.advantageFreeDesc || '无限制使用，无需注册，无广告干扰',
      icon: <CheckCircleOutlined style={{ fontSize: 24, color: '#52c41a' }} />
    }
  ];

  return (
    <Flex
      vertical
      align="center"
      style={{
        padding: isPC ? "32px 40px" : "16px 20px",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Flex
        vertical
        style={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <Title 
          level={isPC ? 2 : 3} 
          style={{ 
            textAlign: "center", 
            marginBottom: "32px",
            fontSize: isPC ? "2.5em" : "1.8em"
          }}
        >
          {gstate.locale?.compare?.whyChoose || "为什么选择 Pic Smaller？与其他工具对比"}
        </Title>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Paragraph style={{ fontSize: "1.2em", textAlign: "center", lineHeight: 1.8 }}>
              {gstate.locale?.compare?.description || "在众多图片压缩工具中，Pic Smaller 凭借其卓越的性能和功能脱颖而出。以下是 Pic Smaller 与同类工具的详细对比分析。"}
            </Paragraph>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 30 }}>
          <Table 
            columns={toolColumns} 
            dataSource={comparisonData} 
            pagination={false}
            rowClassName={(_, index) => index % 2 === 0 ? 'even-row' : 'odd-row'}
            style={{ overflowX: 'auto' }}
          />
        </Card>

        <Card style={{ marginBottom: 30 }}>
          <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>{gstate.locale?.compare?.title || "Pic Smaller 的核心优势"}</Title>
          <Flex wrap="wrap" justify="space-between" gap={20}>
            {advantages.map((advantage, index) => (
              <Flex
                key={index}
                vertical
                align="center"
                style={{
                  flex: isPC ? '1 1 calc(25% - 20px)' : '1 1 100%',
                  minWidth: isPC ? 200 : '100%',
                  padding: '20px',
                  border: '1px solid #f0f0f0',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  {advantage.icon}
                </div>
                <Title level={4} style={{ margin: '8px 0' }}>
                  {advantage.title}
                </Title>
                <Text type="secondary">
                  {advantage.description}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Card>

        <Flex gap={20} style={{ width: "100%" }} vertical={!isPC}>
          <Card>
            <Title level={4} style={{ color: '#52c41a' }}>{gstate.locale?.compare?.privacyTitle || "隐私安全"}</Title>
            <Paragraph>
              {gstate.locale?.compare?.privacyDesc || "Pic Smaller 是唯一一款完全在本地处理图片的工具，您的文件永远不会离开您的设备。相比之下，大多数其他工具都需要上传图片到服务器进行处理，存在隐私泄露风险。"}
            </Paragraph>
          </Card>
          
          <Card>
            <Title level={4} style={{ color: '#1890ff' }}>{gstate.locale?.compare?.supportTitle || "技术支持"}</Title>
            <Paragraph>
              {gstate.locale?.compare?.supportDesc || "我们提供全面的技术支持和持续的更新，确保您始终使用最新的压缩技术。Pic Smaller 支持所有主流图片格式，而其他工具往往只支持最常见的几种格式。"}
            </Paragraph>
          </Card>
          
          <Card>
            <Title level={4} style={{ color: '#722ed1' }}>{gstate.locale?.compare?.experienceTitle || "用户体验"}</Title>
            <Paragraph>
              {gstate.locale?.compare?.experienceDesc || "简洁直观的界面设计，一键式操作流程，即使是技术新手也能轻松使用。与其他工具相比，Pic Smaller 提供了更精细的压缩参数控制和实时预览功能。"}
            </Paragraph>
          </Card>
        </Flex>
        
        <Card style={{ marginTop: 20 }}>
          <Typography>
            <Title level={3} style={{ textAlign: "center", marginBottom: 16 }}>{gstate.locale?.compare?.conclusion || "结论"}</Title>
            <Paragraph style={{ fontSize: "1.1em", lineHeight: 1.8, textAlign: "center" }}>
              {gstate.locale?.compare?.conclusionDesc || "无论从隐私保护、功能完整性、压缩质量还是用户体验方面来看，Pic Smaller 都是市面上最优秀的图片压缩工具。我们专注于为您提供最安全、最高效的图片压缩解决方案，让您的网站加载更快，用户体验更佳。"}
            </Paragraph>
            
            <Flex justify="center" style={{ marginTop: 20 }}>
              <Tag color="green" style={{ fontSize: '1.1em', padding: '8px 16px' }}>
                <CheckCircleOutlined /> {gstate.locale?.compare?.tagText || "选择 Pic Smaller，选择最佳的图片压缩体验"}
              </Tag>
            </Flex>
          </Typography>
        </Card>
      </Flex>
    </Flex>
  );
});

export default Compare;