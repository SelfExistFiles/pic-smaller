import { observer } from "mobx-react-lite";
import { Typography, Card, Row, Col, Space, Button, List } from "antd";
import { UploadCard } from "@/components/UploadCard";
import { goto } from "@/router";
import { usePageSEO } from "@/engines/seo";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const BulkImageProcessing = observer(() => {

  // 设置页面SEO数据
  usePageSEO({
    title: gstate.locale?.bulkImageProcessing?.title || "批量图片处理 - 高效批量压缩转换图片 | Pic Smaller",
    description: gstate.locale?.bulkImageProcessing?.description || "高效批量图片处理工具，支持同时处理多张图片，统一调整尺寸、格式转换、批量压缩等功能，显著提高图片处理效率。",
    keywords: gstate.locale?.bulkImageProcessing?.keywords || "批量图片处理,批量压缩,批量转换,多图片处理,图片批量优化,批量图片压缩工具,图片处理效率",
    canonical: "https://picsmaller.com/bulk-image-processing"
  });

  const handleTryNow = () => {
    goto("/");
  };

  const features = [
    gstate.locale?.bulkImageProcessing?.feature1 || "同时处理多张图片",
    gstate.locale?.bulkImageProcessing?.feature2 || "统一调整图片尺寸", 
    gstate.locale?.bulkImageProcessing?.feature3 || "批量格式转换",
    gstate.locale?.bulkImageProcessing?.feature4 || "一键压缩整个文件夹",
    gstate.locale?.bulkImageProcessing?.feature5 || "保持图片EXIF信息",
    gstate.locale?.bulkImageProcessing?.feature6 || "支持拖拽上传"
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Typography>
        <Title level={1} style={{ textAlign: "center", marginBottom: "24px" }}>
          {gstate.locale?.bulkImageProcessing?.heading || "批量图片处理 - 高效处理多张图片"}
        </Title>
        <Paragraph style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>
          {gstate.locale?.bulkImageProcessing?.subtitle || "一次性处理大量图片，节省时间，提高效率。支持批量压缩、格式转换、尺寸调整等多种操作。"}
        </Paragraph>
      </Typography>

      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} md={12}>
          <Card title={gstate.locale?.bulkImageProcessing?.featuresTitle || "批量处理功能"} style={{ height: "100%" }}>
            <List
              size="small"
              dataSource={features}
              renderItem={(item) => (
                <List.Item>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title={gstate.locale?.bulkImageProcessing?.startProcessingTitle || "开始批量处理"} style={{ height: "100%" }}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Paragraph>
                {gstate.locale?.bulkImageProcessing?.startProcessingTitle ? "上传多张图片，设置统一的处理参数，一键完成批量处理。" : "上传多张图片，设置统一的处理参数，一键完成批量处理。"}
              </Paragraph>
              <div style={{ textAlign: "center" }}>
                <UploadCard />
              </div>
              <div style={{ textAlign: "center" }}>
                <Button type="primary" size="large" onClick={handleTryNow}>
                  {gstate.locale?.bulkImageProcessing?.processNow || "立即批量处理"}
                </Button>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "24px" }}>
        <Col span={24}>
          <Card title={gstate.locale?.bulkImageProcessing?.workflowTitle || "批量处理工作流程"}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={6}>
                  <Card>
                    <Text strong>1. {gstate.locale?.bulkImageProcessing?.step1?.split('：')[0] || "上传"}</Text>
                    <br />
                    {gstate.locale?.bulkImageProcessing?.step1 ? gstate.locale.bulkImageProcessing.step1.split('：')[1] : "选择多个图片文件或拖拽整个文件夹到上传区域"}
                  </Card>
                </Col>
                <Col xs={24} md={6}>
                  <Card>
                    <Text strong>2. {gstate.locale?.bulkImageProcessing?.step2?.split('：')[0] || "设置参数"}</Text>
                    <br />
                    {gstate.locale?.bulkImageProcessing?.step2 ? gstate.locale.bulkImageProcessing.step2.split('：')[1] : "选择压缩质量、目标格式、尺寸等统一参数"}
                  </Card>
                </Col>
                <Col xs={24} md={6}>
                  <Card>
                    <Text strong>3. {gstate.locale?.bulkImageProcessing?.step3?.split('：')[0] || "处理"}</Text>
                    <br />
                    {gstate.locale?.bulkImageProcessing?.step3 ? gstate.locale.bulkImageProcessing.step3.split('：')[1] : "点击批量处理按钮，系统将按顺序处理所有图片"}
                  </Card>
                </Col>
                <Col xs={24} md={6}>
                  <Card>
                    <Text strong>4. {gstate.locale?.bulkImageProcessing?.step4?.split('：')[0] || "下载"}</Text>
                    <br />
                    {gstate.locale?.bulkImageProcessing?.step4 ? gstate.locale.bulkImageProcessing.step4.split('：')[1] : "处理完成后可选择单个下载或打包下载"}
                  </Card>
                </Col>
              </Row>
            </Space>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "24px" }}>
        <Col span={24}>
          <Card title={gstate.locale?.bulkImageProcessing?.scenariosTitle || "适合批量处理的场景"}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8}>
                <Card>
                  <Text strong>{gstate.locale?.bulkImageProcessing?.scenario1?.split('：')[0] || "电商网站"}</Text>
                  <br />
                  {gstate.locale?.bulkImageProcessing?.scenario1 ? gstate.locale.bulkImageProcessing.scenario1.split('：')[1] : "为商品图片统一压缩和调整尺寸，提升网站加载速度"}
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card>
                  <Text strong>{gstate.locale?.bulkImageProcessing?.scenario2?.split('：')[0] || "摄影博客"}</Text>
                  <br />
                  {gstate.locale?.bulkImageProcessing?.scenario2 ? gstate.locale.bulkImageProcessing.scenario2.split('：')[1] : "处理大量摄影作品，优化网页显示效果"}
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card>
                  <Text strong>{gstate.locale?.bulkImageProcessing?.scenario3?.split('：')[0] || "设计工作室"}</Text>
                  <br />
                  {gstate.locale?.bulkImageProcessing?.scenario3 ? gstate.locale.bulkImageProcessing.scenario3.split('：')[1] : "标准化设计素材，统一格式和质量"}
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
});

export default BulkImageProcessing;