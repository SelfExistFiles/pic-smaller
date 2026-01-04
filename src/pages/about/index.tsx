import { observer } from "mobx-react-lite";
import { Button, Card, Flex, Typography } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { useResponse } from "@/media";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const About = observer(() => {
  const { isPC } = useResponse();

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
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <Title level={isPC ? 2 : 3} style={{ textAlign: "center", marginBottom: "32px" }}>
          {gstate.locale?.about?.title || '关于 Pic Smaller - 在线图片压缩工具'}
        </Title>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.about?.whatTitle || '什么是 Pic Smaller？'}</Title>
            <Paragraph>
              {gstate.locale?.about?.whatDesc || 'Pic Smaller 是一款完全免费的在线图片压缩工具，它可以帮助您快速减小图片文件大小，同时尽可能保持图片质量。我们的工具完全在您的浏览器中运行，无需上传图片到服务器，确保您的隐私和数据安全。'}
            </Paragraph>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.about?.advantagesTitle || '我们的优势'}</Title>
            <Paragraph>
              <ul>
                <li>
                  <Text strong>{gstate.locale?.about?.privacyTitle || '隐私安全：'}</Text>
                  {gstate.locale?.about?.privacyDesc || '所有压缩处理都在您的浏览器本地进行，图片不会上传到任何服务器'}
                </li>
                <li>
                  <Text strong>{gstate.locale?.about?.formatsTitle || '支持多种格式：'}</Text>
                  {gstate.locale?.about?.formatsDesc || '支持 JPEG、PNG、WEBP、AVIF、SVG 和 GIF 等多种图片格式'}
                </li>
                <li>
                  <Text strong>{gstate.locale?.about?.simpleTitle || '操作简单：'}</Text>
                  {gstate.locale?.about?.simpleDesc || '直观的用户界面，拖拽上传，一键压缩'}
                </li>
                <li>
                  <Text strong>{gstate.locale?.about?.freeTitle || '完全免费：'}</Text>
                  {gstate.locale?.about?.freeDesc || '无限次使用，无需注册，无广告干扰'}
                </li>
                <li>
                  <Text strong>{gstate.locale?.about?.efficientTitle || '高效压缩：'}</Text>
                  {gstate.locale?.about?.efficientDesc || '使用先进的压缩算法，显著减小文件大小'}
                </li>
              </ul>
            </Paragraph>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.about?.whyTitle || '为什么选择 Pic Smaller？'}</Title>
            <Paragraph>
              {gstate.locale?.about?.whyDesc || '在互联网时代，高质量的图片对于网站、社交媒体和数字营销至关重要，但大尺寸的图片文件会严重影响网页加载速度和用户体验。Pic Smaller 通过智能压缩技术，在保持图片视觉质量的同时，有效减小文件大小，帮助您提升网站性能和用户体验。'}
            </Paragraph>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.about?.howTitle || '如何使用 Pic Smaller？'}</Title>
            <Paragraph>
              <ol>
                <li>{gstate.locale?.about?.howStep1 || '访问我们的主页，拖拽图片文件到上传区域，或点击上传'}</li>
                <li>{gstate.locale?.about?.howStep2 || '根据需要调整压缩参数（质量、尺寸等）'}</li>
                <li>{gstate.locale?.about?.howStep3 || '查看实时压缩预览，确认效果'}</li>
                <li>{gstate.locale?.about?.howStep4 || '下载压缩后的优化图片'}</li>
              </ol>
              {gstate.locale?.about?.howDesc || '整个过程简单快捷，无需任何专业技能。'}
            </Paragraph>
          </Typography>
        </Card>

        <Flex justify="center" style={{ marginTop: 20 }}>
          <Button
            type="primary"
            size="large"
            icon={<LinkOutlined />}
            onClick={() => {
              window.location.hash = "#/";
            }}
          >
            {gstate.locale?.about?.getStarted || '立即开始压缩'}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
});

export default About;