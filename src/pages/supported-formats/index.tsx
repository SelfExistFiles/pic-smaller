import { observer } from "mobx-react-lite";
import { Typography, Card, Row, Col, Table, Space } from "antd";
import { PictureOutlined, SwapOutlined } from "@ant-design/icons";
import { usePageSEO } from "@/engines/seo";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const SupportedFormats = observer(() => {
  // 设置页面SEO数据
  usePageSEO({
    title: gstate.locale?.supportedFormats?.title || "支持的图片格式 - JPG, PNG, WEBP, AVIF, GIF, SVG | Pic Smaller",
    description: gstate.locale?.supportedFormats?.description || "了解Pic Smaller支持的所有图片格式，包括JPG、PNG、WEBP、AVIF、GIF、SVG等。查看每种格式的特性、压缩方式和最佳使用场景。",
    keywords: gstate.locale?.supportedFormats?.keywords || "支持的图片格式,图片格式,JPG,PNG,WEBP,AVIF,GIF,SVG,BMP,TIFF,图片格式转换,格式支持详情",
    canonical: "https://picsmaller.com/supported-formats"
  });

  const formatData = [
    {
      key: '1',
      format: gstate.locale?.supportedFormats?.formatJpg || 'JPG/JPEG',
      extension: '.jpg, .jpeg',
      description: gstate.locale?.supportedFormats?.jpgDesc || '最常用的图片格式，适合照片，支持有损压缩',
      compression: gstate.locale?.supportedFormats?.jpgPros || '有损压缩，高压缩率',
      useCase: gstate.locale?.supportedFormats?.jpgUseCase || '照片、网页图片',
      icon: <PictureOutlined />
    },
    {
      key: '2',
      format: 'PNG',
      extension: '.png',
      description: gstate.locale?.supportedFormats?.pngDesc || '支持透明背景，适合图标和图形',
      compression: gstate.locale?.supportedFormats?.pngPros || '无损压缩',
      useCase: gstate.locale?.supportedFormats?.pngUseCase || '图标、图形、带透明度的图片',
      icon: <PictureOutlined />
    },
    {
      key: '3',
      format: 'WEBP',
      extension: '.webp',
      description: gstate.locale?.supportedFormats?.webpDesc || 'Google开发的新格式，体积更小',
      compression: gstate.locale?.supportedFormats?.webpCompression || '有损和无损压缩',
      useCase: gstate.locale?.supportedFormats?.webpUseCase || '现代网页图片',
      icon: <PictureOutlined />
    },
    {
      key: '4',
      format: 'GIF',
      extension: '.gif',
      description: gstate.locale?.supportedFormats?.gifDesc || '支持动画，适合简单动画图片',
      compression: gstate.locale?.supportedFormats?.gifCompression || '无损压缩',
      useCase: gstate.locale?.supportedFormats?.gifUseCase || '简单动画、低色彩图片',
      icon: <PictureOutlined />
    },
    {
      key: '5',
      format: 'AVIF',
      extension: '.avif',
      description: gstate.locale?.supportedFormats?.avifDesc || '最新标准，压缩效率极高',
      compression: gstate.locale?.supportedFormats?.avifCompression || '有损压缩',
      useCase: gstate.locale?.supportedFormats?.avifUseCase || '高质量图片、现代网页',
      icon: <PictureOutlined />
    },
    {
      key: '6',
      format: 'SVG',
      extension: '.svg',
      description: gstate.locale?.supportedFormats?.svgDesc || '矢量格式，无限缩放不失真',
      compression: gstate.locale?.supportedFormats?.svgCompression || '可压缩为SVGZ',
      useCase: gstate.locale?.supportedFormats?.svgUseCase || '图标、图表、简单图形',
      icon: <PictureOutlined />
    },
    {
      key: '7',
      format: 'BMP',
      extension: '.bmp',
      description: gstate.locale?.supportedFormats?.bmpDesc || '位图格式，未压缩，质量高',
      compression: gstate.locale?.supportedFormats?.bmpCompression || '无压缩',
      useCase: gstate.locale?.supportedFormats?.bmpUseCase || '原始图片数据、打印',
      icon: <PictureOutlined />
    },
    {
      key: '8',
      format: 'TIFF',
      extension: '.tiff, .tif',
      description: gstate.locale?.supportedFormats?.tiffDesc || '专业图像格式，支持多种压缩方式',
      compression: gstate.locale?.supportedFormats?.tiffCompression || '无损和有损压缩',
      useCase: gstate.locale?.supportedFormats?.tiffUseCase || '专业图像处理、印刷',
      icon: <PictureOutlined />
    },
  ];

  const columns = [
    {
      title: '格式',
      dataIndex: 'format',
      key: 'format',
      render: (text: string) => <Text strong>{text}</Text>
    },
    {
      title: '扩展名',
      dataIndex: 'extension',
      key: 'extension'
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: '压缩方式',
      dataIndex: 'compression',
      key: 'compression'
    },
    {
      title: '使用场景',
      dataIndex: 'useCase',
      key: 'useCase'
    }
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Typography>
        <Title level={1} style={{ textAlign: "center", marginBottom: "24px" }}>
          {gstate.locale?.supportedFormats?.heading || "支持的图片格式 - 全面兼容各种图片类型"}
        </Title>
        <Paragraph style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>
          {gstate.locale?.supportedFormats?.subtitle || "我们的图片压缩工具支持多种图片格式，包括JPG、PNG、WEBP、GIF、AVIF、SVG等，满足各种图片处理需求。"}
        </Paragraph>
      </Typography>

      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card title={gstate.locale?.supportedFormats?.formatConversion || "格式转换功能"}>
            <Paragraph>
              {gstate.locale?.supportedFormats?.conversionDesc || "除了压缩现有格式，我们还提供格式转换功能，您可以将图片从一种格式转换为另一种格式，例如将JPG转换为PNG或WEBP，以适应不同的使用场景。"}
            </Paragraph>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <SwapOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
              <Paragraph style={{ marginTop: "10px" }}>
                <Text strong>{gstate.locale?.supportedFormats?.formatDetails || "支持格式间相互转换"}</Text>
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "24px" }}>
        <Col span={24}>
          <Card title={gstate.locale?.supportedFormats?.formatSupport || "详细格式支持"}>
            <Table 
              dataSource={formatData} 
              columns={columns} 
              pagination={{ pageSize: 10 }}
              scroll={{ x: 800 }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: "24px" }}>
        <Col xs={24} md={12}>
          <Card title={gstate.locale?.supportedFormats?.jpgDetailTitle || "JPG格式详解"}>
            <Space direction="vertical" size="middle">
              <Paragraph>
                <Text strong>JPG</Text>{gstate.locale?.supportedFormats?.jpgDesc || "（Joint Photographic Experts Group）是一种针对相片影像而广泛使用的有损压缩标准方法。"}
              </Paragraph>
              <Paragraph>
                <Text strong>{gstate.locale?.supportedFormats?.jpgPros || "优点：高压缩率，文件小，兼容性好"}</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>{gstate.locale?.supportedFormats?.jpgCons || "缺点：不支持透明，有损压缩，重复编辑会损失质量"}</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>{gstate.locale?.supportedFormats?.jpgUseCase || "适用场景：照片、网页图片、社交媒体"}</Text>
              </Paragraph>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title={gstate.locale?.supportedFormats?.pngDetailTitle || "PNG格式详解"}>
            <Space direction="vertical" size="middle">
              <Paragraph>
                <Text strong>PNG</Text>{gstate.locale?.supportedFormats?.pngDesc || "（Portable Network Graphics）是一种无损压缩的图片格式，支持透明背景。"}
              </Paragraph>
              <Paragraph>
                <Text strong>{gstate.locale?.supportedFormats?.pngPros || "优点：无损压缩，支持透明，支持多种色彩深度"}</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>{gstate.locale?.supportedFormats?.pngCons || "缺点：文件较大，不适用于照片"}</Text>
              </Paragraph>
              <Paragraph>
                <Text strong>{gstate.locale?.supportedFormats?.pngUseCase || "适用场景：图标、图形、透明图片"}</Text>
              </Paragraph>
            </Space>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "24px" }}>
        <Col span={24}>
          <Card title={gstate.locale?.supportedFormats?.formatSelection || "选择合适的图片格式"}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <Card>
                    <Text strong>{gstate.locale?.supportedFormats?.qualityPhoto?.split('：')[0] || "需要高质量照片"}</Text>
                    <br />
                    {gstate.locale?.supportedFormats?.qualityPhoto ? gstate.locale.supportedFormats.qualityPhoto.split('：')[1] : "推荐使用JPG格式，可以设置较高的质量参数"}
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card>
                    <Text strong>{gstate.locale?.supportedFormats?.transparent?.split('：')[0] || "需要透明背景"}</Text>
                    <br />
                    {gstate.locale?.supportedFormats?.transparent ? gstate.locale.supportedFormats.transparent.split('：')[1] : "推荐使用PNG格式，支持完整的透明度"}
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card>
                    <Text strong>{gstate.locale?.supportedFormats?.webOptimization?.split('：')[0] || "现代网页优化"}</Text>
                    <br />
                    {gstate.locale?.supportedFormats?.webOptimization ? gstate.locale.supportedFormats.webOptimization.split('：')[1] : "推荐使用WEBP格式，体积更小，质量更好"}
                  </Card>
                </Col>
              </Row>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
});

export default SupportedFormats;