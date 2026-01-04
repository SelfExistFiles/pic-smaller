import { observer } from "mobx-react-lite";
import { Button, Card, Flex, Typography, Statistic, Row, Col } from "antd";
import { RiseOutlined, UserOutlined, HeatMapOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { useResponse } from "@/media";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const UseCases = observer(() => {
  const { isPC } = useResponse();

  const useCases = [
    {
      title: gstate.locale?.usecases?.ecommerceTitle || '电商网站',
      description: gstate.locale?.usecases?.ecommerceDesc || '优化产品图片，加快页面加载速度，提升转化率',
      icon: '🛍️',
      stats: { 
        reduction: gstate.locale?.usecases?.ecommerceReduction || '65%', 
        improvement: gstate.locale?.usecases?.ecommerceImprovement || '40%' 
      }
    },
    {
      title: gstate.locale?.usecases?.blogTitle || '博客和个人网站',
      description: gstate.locale?.usecases?.blogDesc || '压缩文章配图，提高网站SEO排名和用户体验',
      icon: '📝',
      stats: { 
        reduction: gstate.locale?.usecases?.blogReduction || '70%', 
        improvement: gstate.locale?.usecases?.blogImprovement || '35%' 
      }
    },
    {
      title: gstate.locale?.usecases?.socialTitle || '社交媒体内容',
      description: gstate.locale?.usecases?.socialDesc || '优化分享图片，减少加载时间，提升互动率',
      icon: '📱',
      stats: { 
        reduction: gstate.locale?.usecases?.socialReduction || '60%', 
        improvement: gstate.locale?.usecases?.socialImprovement || '50%' 
      }
    },
    {
      title: gstate.locale?.usecases?.galleryTitle || '在线相册',
      description: gstate.locale?.usecases?.galleryDesc || '批量压缩照片，节省存储空间，提升浏览体验',
      icon: '🖼️',
      stats: { 
        reduction: gstate.locale?.usecases?.galleryReduction || '75%', 
        improvement: gstate.locale?.usecases?.galleryImprovement || '45%' 
      }
    },
    {
      title: gstate.locale?.usecases?.mobileTitle || '移动应用',
      description: gstate.locale?.usecases?.mobileDesc || '优化应用内图片资源，减少应用包大小',
      icon: '📱',
      stats: { 
        reduction: gstate.locale?.usecases?.mobileReduction || '55%', 
        improvement: gstate.locale?.usecases?.mobileImprovement || '30%' 
      }
    },
    {
      title: gstate.locale?.usecases?.emailTitle || '电子邮件营销',
      description: gstate.locale?.usecases?.emailDesc || '压缩邮件图片，减小邮件大小，提高送达率',
      icon: '📧',
      stats: { 
        reduction: gstate.locale?.usecases?.emailReduction || '50%', 
        improvement: gstate.locale?.usecases?.emailImprovement || '25%' 
      }
    }
  ];

  const testimonials = [
    {
      name: gstate.locale?.usecases?.testimonialDesignerName || '张设计师',
      role: gstate.locale?.usecases?.testimonialDesignerRole || 'UI/UX 设计师',
      content: gstate.locale?.usecases?.testimonialDesignerContent || '使用 Pic Smaller 后，我们的网站加载速度提升了 40%，用户留存率显著提高。',
      rating: 5
    },
    {
      name: gstate.locale?.usecases?.testimonialManagerName || '李经理',
      role: gstate.locale?.usecases?.testimonialManagerRole || '电商运营',
      content: gstate.locale?.usecases?.testimonialManagerContent || '批量压缩功能帮我们节省了大量时间，图片质量保持得非常好。',
      rating: 5
    },
    {
      name: gstate.locale?.usecases?.testimonialDeveloperName || '王开发者',
      role: gstate.locale?.usecases?.testimonialDeveloperRole || '前端工程师',
      content: gstate.locale?.usecases?.testimonialDeveloperContent || '完全本地化的处理方式让我们对客户数据安全非常放心。',
      rating: 5
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
            marginBottom: "24px",
            fontSize: isPC ? "2.5em" : "1.8em"
          }}
        >
          {gstate.locale?.usecases?.title || 'Pic Smaller 使用案例与成功故事'}
        </Title>
        
        <Paragraph 
          style={{ 
            textAlign: "center", 
            fontSize: "1.2em", 
            marginBottom: "40px",
            lineHeight: 1.8
          }}
        >
          {gstate.locale?.usecases?.description || '了解不同行业如何使用 Pic Smaller 优化他们的图片资源，提升网站性能和用户体验'}
        </Paragraph>

        <Card style={{ marginBottom: 30 }}>
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Statistic
                title={gstate.locale?.usecases?.statMonthly || "月处理图片"}
                value={5000000}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={<UserOutlined />}
                suffix="张"
              />
            </Col>
            <Col span={6}>
              <Statistic
                title={gstate.locale?.usecases?.statReduction || "平均压缩率"}
                value={68}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={<HeatMapOutlined />}
                suffix="%"
              />
            </Col>
            <Col span={6}>
              <Statistic
                title={gstate.locale?.usecases?.statSatisfaction || "用户满意度"}
                value={98}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={<RiseOutlined />}
                suffix="%"
              />
            </Col>
            <Col span={6}>
              <Statistic
                title={gstate.locale?.usecases?.statPerformance || "性能提升"}
                value={42}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ThunderboltOutlined />}
                suffix="%"
              />
            </Col>
          </Row>
        </Card>

        <Title level={3} style={{ marginBottom: "24px", textAlign: isPC ? "left" : "center" }}>
          {gstate.locale?.usecases?.sectionTitle || '各行业应用场景'}
        </Title>

        <Flex wrap="wrap" gap={20} style={{ marginBottom: 40 }}>
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              style={{ 
                flex: isPC ? '1 1 calc(33.333% - 20px)' : '1 1 100%', 
                minWidth: isPC ? 300 : '100%',
                borderLeft: '4px solid #1890ff'
              }}
              hoverable
            >
              <Flex align="center" gap={12}>
                <div style={{ fontSize: '2em' }}>{useCase.icon}</div>
                <Title level={4} style={{ margin: 0 }}>{useCase.title}</Title>
              </Flex>
              <Paragraph style={{ marginTop: 12, lineHeight: 1.6 }}>
                {useCase.description}
              </Paragraph>
              <Flex justify="space-between" style={{ marginTop: 16 }}>
                <div>
                  <Text type="secondary">{gstate.locale?.usecases?.ecommerceReduction || '文件大小减少'}</Text>
                  <Title level={5} style={{ margin: '4px 0', color: '#3f8600' }}>
                    {useCase.stats.reduction}
                  </Title>
                </div>
                <div>
                  <Text type="secondary">{gstate.locale?.usecases?.ecommerceImprovement || '性能提升'}</Text>
                  <Title level={5} style={{ margin: '4px 0', color: '#3f8600' }}>
                    {useCase.stats.improvement}
                  </Title>
                </div>
              </Flex>
            </Card>
          ))}
        </Flex>

        <Card style={{ marginBottom: 30 }}>
          <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
            {gstate.locale?.usecases?.testimonialTitle || '用户评价与成功案例'}
          </Title>
          
          <Flex wrap="wrap" gap={20}>
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                style={{ 
                  flex: isPC ? '1 1 calc(33.333% - 20px)' : '1 1 100%', 
                  minWidth: isPC ? 300 : '100%' 
                }}
              >
                <Flex vertical>
                  <Flex align="center" gap={8} style={{ marginBottom: 12 }}>
                    {'⭐'.repeat(testimonial.rating)}
                  </Flex>
                  <Paragraph style={{ fontSize: "1.1em", fontStyle: "italic" }}>
                    "{testimonial.content}"
                  </Paragraph>
                  <div style={{ marginTop: 'auto' }}>
                    <Text strong>{testimonial.name}</Text>
                    <br />
                    <Text type="secondary">{testimonial.role}</Text>
                  </div>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Card>

        <Card style={{ marginBottom: 30 }}>
          <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
            {gstate.locale?.usecases?.howToTitle || '如何为您的业务使用 Pic Smaller'}
          </Title>
          
          <Flex vertical gap={24}>
            <Flex align="flex-start" gap={16}>
              <div style={{ 
                background: '#1890ff', 
                color: 'white', 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 4
              }}>
                1
              </div>
              <div>
                <Title level={4} style={{ margin: 0 }}>{gstate.locale?.usecases?.howToStep1 || '识别优化机会'}</Title>
                <Paragraph style={{ lineHeight: 1.8, marginTop: 8 }}>
                  {gstate.locale?.usecases?.howToStep1Desc || '识别您网站或应用中占用空间较大的图片，特别是首页和产品页面的图片。通常这些图片有显著的优化空间。'}
                </Paragraph>
              </div>
            </Flex>
            
            <Flex align="flex-start" gap={16}>
              <div style={{ 
                background: '#1890ff', 
                color: 'white', 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 4
              }}>
                2
              </div>
              <div>
                <Title level={4} style={{ margin: 0 }}>{gstate.locale?.usecases?.howToStep2 || '批量处理'}</Title>
                <Paragraph style={{ lineHeight: 1.8, marginTop: 8 }}>
                  {gstate.locale?.usecases?.howToStep2Desc || '使用 Pic Smaller 的批量处理功能，一次性压缩多张图片。设置合适的质量参数，以在文件大小和图片质量之间找到平衡。'}
                </Paragraph>
              </div>
            </Flex>
            
            <Flex align="flex-start" gap={16}>
              <div style={{ 
                background: '#1890ff', 
                color: 'white', 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 4
              }}>
                3
              </div>
              <div>
                <Title level={4} style={{ margin: 0 }}>{gstate.locale?.usecases?.howToStep3 || '部署和监控'}</Title>
                <Paragraph style={{ lineHeight: 1.8, marginTop: 8 }}>
                  {gstate.locale?.usecases?.howToStep3Desc || '将优化后的图片部署到您的网站或应用中。使用网站分析工具监控页面加载速度的改善和用户参与度的变化。'}
                </Paragraph>
              </div>
            </Flex>
          </Flex>
        </Card>

        <Card>
          <Flex vertical align="center" gap={20}>
            <Title level={3} style={{ textAlign: "center" }}>
              {gstate.locale?.usecases?.ctaTitle || '开始优化您的图片'}
            </Title>
            <Paragraph style={{ textAlign: "center", fontSize: "1.1em" }}>
              {gstate.locale?.usecases?.ctaDesc || '立即使用 Pic Smaller 优化您的图片，提升网站性能和用户体验'}
            </Paragraph>
            <Button 
              type="primary" 
              size="large"
              onClick={() => {
                window.location.hash = "#/";
              }}
            >
              {gstate.locale?.usecases?.ctaButton || '立即开始压缩'}
            </Button>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
});

export default UseCases;