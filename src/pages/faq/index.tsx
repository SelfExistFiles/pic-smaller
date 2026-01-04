import { observer } from "mobx-react-lite";
import { Card, Flex, Typography, Collapse } from "antd";
import { QuestionCircleOutlined, SafetyCertificateOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { useResponse } from "@/media";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const Faq = observer(() => {
  const { isPC } = useResponse();

  // 兼容不同语言文件中的FAQ结构
  const getFaqData = () => {
    const locale = gstate.locale?.faq as any;
    
    // 调试信息
    console.log('FAQ locale:', locale);
    console.log('Current language:', gstate.lang);
    
    // 优先检查分类结构（如日文、法文、韩文等）
    if (locale && (locale.general || locale.compression || locale.privacy || locale.technical)) {
      console.log('Using categorized FAQ structure');
      const categorizedFaq: Array<{key: string, question: string, answer: string}> = [];
      
      // 通用问题
      if (locale.general) {
        Object.keys(locale.general).forEach(key => {
          if (key.startsWith('q') && locale.general[key]) {
            const answerKey = key.replace('q', 'a');
            categorizedFaq.push({
              key: `general-${key}`,
              question: locale.general[key],
              answer: locale.general[answerKey] || ''
            });
          }
        });
      }
      
      // 压缩相关问题
      if (locale.compression) {
        Object.keys(locale.compression).forEach(key => {
          if (key.startsWith('q') && locale.compression[key]) {
            const answerKey = key.replace('q', 'a');
            categorizedFaq.push({
              key: `compression-${key}`,
              question: locale.compression[key],
              answer: locale.compression[answerKey] || ''
            });
          }
        });
      }
      
      // 隐私相关问题
      if (locale.privacy) {
        Object.keys(locale.privacy).forEach(key => {
          if (key.startsWith('q') && locale.privacy[key]) {
            const answerKey = key.replace('q', 'a');
            categorizedFaq.push({
              key: `privacy-${key}`,
              question: locale.privacy[key],
              answer: locale.privacy[answerKey] || ''
            });
          }
        });
      }
      
      // 技术相关问题
      if (locale.technical) {
        Object.keys(locale.technical).forEach(key => {
          if (key.startsWith('q') && locale.technical[key]) {
            const answerKey = key.replace('q', 'a');
            categorizedFaq.push({
              key: `technical-${key}`,
              question: locale.technical[key],
              answer: locale.technical[answerKey] || ''
            });
          }
        });
      }
      
      console.log('Categorized FAQ data:', categorizedFaq);
      return categorizedFaq;
    }
    
    // 检查简单的问答结构（如中文和英文）
    if (locale?.question1 && locale?.answer1) {
      console.log('Using simple FAQ structure');
      const simpleFaq = [
        {
          key: '1',
          question: locale.question1,
          answer: locale.answer1
        },
        {
          key: '2',
          question: locale.question2,
          answer: locale.answer2
        },
        {
          key: '3',
          question: locale.question3,
          answer: locale.answer3
        },
        {
          key: '4',
          question: locale.question4,
          answer: locale.answer4
        },
        {
          key: '5',
          question: locale.question5,
          answer: locale.answer5
        },
        {
          key: '6',
          question: locale.question6,
          answer: locale.answer6
        },
        {
          key: '7',
          question: locale.question7,
          answer: locale.answer7
        },
        {
          key: '8',
          question: locale.question8,
          answer: locale.answer8
        }
      ];
      console.log('Simple FAQ data:', simpleFaq);
      return simpleFaq;
    }
    
    // 默认中文回退
    console.log('Using default fallback FAQ');
    const defaultFaq = [
      {
        key: '1',
        question: 'Pic Smaller 是什么？',
        answer: 'Pic Smaller 是一款完全免费的在线图片压缩工具，帮助您快速减小图片文件大小，同时保持图片质量。所有处理都在您的浏览器本地进行，确保隐私安全。'
      },
      {
        key: '2',
        question: '我的图片安全吗？',
        answer: '非常安全！所有图片压缩处理都在您的浏览器本地完成，图片不会上传到任何服务器。关闭页面后，所有数据都会被自动清除。'
      },
      {
        key: '3',
        question: '支持哪些图片格式？',
        answer: '我们支持 JPEG、PNG、WEBP、AVIF、SVG 和 GIF 等多种图片格式。'
      },
      {
        key: '4',
        question: '压缩会影响图片质量吗？',
        answer: '这取决于您选择的压缩设置。我们提供质量调节滑块，您可以根据需要平衡文件大小和图片质量。'
      },
      {
        key: '5',
        question: '压缩速度如何？',
        answer: '压缩速度取决于您的设备性能和图片大小。我们的工具使用 WebAssembly 技术，提供接近原生的处理速度。'
      },
      {
        key: '6',
        question: '是否需要注册？',
        answer: '不需要！Pic Smaller 完全免费使用，无需注册，无广告干扰。'
      },
      {
        key: '7',
        question: '压缩后图片质量能保持多少？',
        answer: '这取决于原始图片和您选择的压缩设置。在 80%-90% 的质量设置下，通常可以实现良好的文件大小与质量平衡。'
      },
      {
        key: '8',
        question: '如何选择最佳输出格式？',
        answer: '对于照片，JPEG 通常是最好的选择；对于需要透明度的图片，PNG 或 WEBP 更好；对于现代浏览器，WEBP 提供最佳的压缩效果。'
      }
    ];
    console.log('Default FAQ data:', defaultFaq);
    return defaultFaq;
  };

  const faqData = getFaqData();

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
          maxWidth: "900px",
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
          {(gstate.locale?.faq as any)?.title || "常见问题解答"}
        </Title>

        <Card style={{ marginBottom: 20 }}>
          <Flex align="center" style={{ marginBottom: 16 }}>
            <QuestionCircleOutlined style={{ fontSize: 28, color: '#1890ff', marginRight: 12 }} />
            <Title level={3} style={{ margin: 0 }}>{(gstate.locale?.faq as any)?.aboutPicSmaller || "关于 Pic Smaller"}</Title>
          </Flex>
          <Paragraph style={{ fontSize: "1.1em", lineHeight: 1.8 }}>
            {(gstate.locale?.faq as any)?.aboutContent || "以下是关于 Pic Smaller 图片压缩工具的常见问题和解答。如果您有其他问题，请联系我们。"}
          </Paragraph>
        </Card>

        <Card>
          <Collapse
            items={faqData.map(item => ({
              key: item.key,
              label: (
                <Text strong style={{ fontSize: "1.1em" }}>
                  {item.question}
                </Text>
              ),
              children: (
                <Paragraph style={{ fontSize: "1.05em", lineHeight: 1.7 }}>
                  {item.answer}
                </Paragraph>
              ),
            }))}
            defaultActiveKey={faqData.map(item => item.key)}
            accordion={false}
            size="large"
          />
        </Card>

        <Card style={{ marginTop: 30 }}>
          <Flex align="center" style={{ marginBottom: 16 }}>
            <SafetyCertificateOutlined style={{ fontSize: 28, color: '#52c41a', marginRight: 12 }} />
            <Title level={3} style={{ margin: 0 }}>{(gstate.locale?.faq as any)?.privacySecurity || "隐私与安全"}</Title>
          </Flex>
          <Paragraph style={{ fontSize: "1.1em", lineHeight: 1.8 }}>
            {(gstate.locale?.faq as any)?.privacyContent || "我们高度重视您的隐私和数据安全。所有图片处理都在您的设备上完成，您的文件永远不会上传到任何服务器，确保您的数据完全私密和安全。"}
          </Paragraph>
        </Card>

        <Card style={{ marginTop: 20 }}>
          <Flex align="center" style={{ marginBottom: 16 }}>
            <ThunderboltOutlined style={{ fontSize: 28, color: '#fa8c16', marginRight: 12 }} />
            <Title level={3} style={{ margin: 0 }}>{(gstate.locale?.faq as any)?.techAdvantage || "技术优势"}</Title>
          </Flex>
          <Paragraph style={{ fontSize: "1.1em", lineHeight: 1.8 }}>
            {(gstate.locale?.faq as any)?.techContent || "Pic Smaller 采用现代浏览器技术，包括 Canvas API、WebAssembly 和 Web Workers，为您提供快速、高效的图片压缩体验，同时保持高质量的输出效果。"}
          </Paragraph>
        </Card>
      </Flex>
    </Flex>
  );
});

export default Faq;