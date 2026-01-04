import { observer } from "mobx-react-lite";
import { Typography, Card, Row, Col, Space, Button } from "antd";
import { UploadCard } from "@/components/UploadCard";
import { goto } from "@/router";
import { usePageSEO } from "@/engines/seo";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const OnlineImageCompression = observer(() => {

  // 设置页面SEO数据
  usePageSEO({
    title: gstate.locale?.onlineImageCompression?.title || "在线图片压缩 - 免费高效的图片压缩工具 | Pic Smaller",
    description: gstate.locale?.onlineImageCompression?.description || "免费在线图片压缩工具，支持JPG、PNG、WEBP、GIF等格式。在浏览器本地完成压缩，保障隐私安全，显著减小文件大小而不明显影响质量。",
    keywords: gstate.locale?.onlineImageCompression?.keywords || "在线图片压缩,图片压缩工具,免费压缩,JPG压缩,PNG压缩,WEBP压缩,GIF压缩,图片优化,浏览器本地处理,隐私安全",
    canonical: "https://picsmaller.com/online-image-compression"
  });

  const handleTryNow = () => {
    goto("/");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Typography>
        <Title level={1} style={{ textAlign: "center", marginBottom: "24px" }}>
          {gstate.locale?.onlineImageCompression?.heading || "在线图片压缩 - 免费高效的图片压缩工具"}
        </Title>
        <Paragraph style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>
          {gstate.locale?.onlineImageCompression?.subtitle || "在线免费压缩JPG、PNG、WEBP、GIF等格式图片，支持批量处理，显著减小文件大小而不明显影响质量。"}
        </Paragraph>
      </Typography>

      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} md={12}>
          <Card title={gstate.locale?.onlineImageCompression?.whyChooseTitle || "为什么选择我们的图片压缩工具？"} style={{ height: "100%" }}>
            <Space direction="vertical" size="middle">
              <Paragraph>
                <Text strong>1. {gstate.locale?.onlineImageCompression?.feature1 || "高效压缩：使用先进的压缩算法，在保持图片质量的同时显著减小文件大小。"}</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>2. {gstate.locale?.onlineImageCompression?.feature2 || "多格式支持：支持JPG、PNG、WEBP、GIF等多种常见图片格式。"}</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>3. {gstate.locale?.onlineImageCompression?.feature3 || "批量处理：一次可处理多张图片，提高工作效率。"}</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>4. {gstate.locale?.onlineImageCompression?.feature4 || "隐私安全：所有处理均在浏览器本地完成，您的图片不会上传到服务器。"}</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>5. {gstate.locale?.onlineImageCompression?.feature5 || "完全免费：无需注册，无限制使用，永久免费。"}</Text>
              </Paragraph>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title={gstate.locale?.onlineImageCompression?.startNowTitle || "立即开始使用"} style={{ height: "100%" }}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Paragraph>
                {gstate.locale?.onlineImageCompression?.startNowTitle ? "我们的图片压缩工具简单易用，无需下载软件，直接在浏览器中即可完成图片压缩。" : "我们的图片压缩工具简单易用，无需下载软件，直接在浏览器中即可完成图片压缩。"}
              </Paragraph>
              <div style={{ textAlign: "center" }}>
                <UploadCard />
              </div>
              <div style={{ textAlign: "center" }}>
                <Button type="primary" size="large" onClick={handleTryNow}>
                  {gstate.locale?.onlineImageCompression?.tryNow || "立即体验"}
                </Button>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: "24px" }}>
        <Col xs={24} md={8}>
          <Card title={gstate.locale?.onlineImageCompression?.jpgTitle || "JPG压缩"}>
            <Paragraph>
              {gstate.locale?.onlineImageCompression?.jpgDesc || "针对照片类图片的高效压缩，可在保持视觉质量的同时大幅减小文件大小。"}
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title={gstate.locale?.onlineImageCompression?.pngTitle || "PNG压缩"}>
            <Paragraph>
              {gstate.locale?.onlineImageCompression?.pngDesc || "适用于图标、图形等带透明背景的图片，支持无损和有损压缩。"}
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title={gstate.locale?.onlineImageCompression?.webpTitle || "WEBP转换"}>
            <Paragraph>
              {gstate.locale?.onlineImageCompression?.webpDesc || "Google开发的新一代图片格式，比JPG和PNG更小的文件大小。"}
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "24px" }}>
        <Col span={24}>
          <Card title={gstate.locale?.onlineImageCompression?.howToTitle || "如何使用我们的图片压缩工具"}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Paragraph>
                <Text strong>1. {gstate.locale?.onlineImageCompression?.step1 || "上传图片：点击上传区域或拖拽图片到指定区域。"}</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>2. {gstate.locale?.onlineImageCompression?.step2 || "选择压缩选项：根据需要调整压缩质量、图片尺寸等参数。"}</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>3. {gstate.locale?.onlineImageCompression?.step3 || "开始压缩：点击压缩按钮，等待处理完成。"}</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>4. {gstate.locale?.onlineImageCompression?.step4 || "下载图片：压缩完成后，可批量下载处理后的图片。"}</Text>
              </Paragraph>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
});

export default OnlineImageCompression;