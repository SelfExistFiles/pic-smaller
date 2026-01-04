import { observer } from "mobx-react-lite";
import { Card, Flex, Table, Typography } from "antd";
import { useResponse } from "@/media";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const Formats = observer(() => {
  const { isPC } = useResponse();

  const formatData = [
    {
      key: '1',
      format: gstate.locale?.formats?.jpegTitle || 'JPEG',
      extension: '.jpg / .jpeg',
      description: gstate.locale?.formats?.jpegDesc || '最常用的图片格式，适合照片和复杂图像，支持有损压缩',
      compressionType: gstate.locale?.formats?.jpegCompressionType || '有损',
      bestFor: gstate.locale?.formats?.jpegBestFor || '照片、复杂图像、网页图片',
      advantages: gstate.locale?.formats?.jpegAdvantages || '高压缩率、广泛支持、较小文件大小',
      disadvantages: gstate.locale?.formats?.jpegDisadvantages || '不支持透明度、有损压缩',
    },
    {
      key: '2',
      format: gstate.locale?.formats?.pngTitle || 'PNG',
      extension: '.png',
      description: gstate.locale?.formats?.pngDesc || '支持无损压缩和透明度，适合图标、图表和简单图像',
      compressionType: gstate.locale?.formats?.pngCompressionType || '无损',
      bestFor: gstate.locale?.formats?.pngBestFor || '图标、图表、透明图片',
      advantages: gstate.locale?.formats?.pngAdvantages || '无损压缩、支持透明度、高质量保存',
      disadvantages: gstate.locale?.formats?.pngDisadvantages || '文件较大、不适用于复杂图像',
    },
    {
      key: '3',
      format: gstate.locale?.formats?.webpTitle || 'WEBP',
      extension: '.webp',
      description: gstate.locale?.formats?.webpDesc || '现代图片格式，提供比JPEG和PNG更好的压缩效果',
      compressionType: gstate.locale?.formats?.webpCompressionType || '有损/无损',
      bestFor: gstate.locale?.formats?.webpBestFor || '现代网页、需要高压缩率的图片',
      advantages: gstate.locale?.formats?.webpAdvantages || '高压缩率、支持透明度、有损无损可选',
      disadvantages: gstate.locale?.formats?.webpDisadvantages || '较新格式，部分旧浏览器不支持',
    },
    {
      key: '4',
      format: gstate.locale?.formats?.avifTitle || 'AVIF',
      extension: '.avif',
      description: gstate.locale?.formats?.avifDesc || '最新的图片格式，提供最佳的压缩效率和图像质量',
      compressionType: gstate.locale?.formats?.avifCompressionType || '有损/无损',
      bestFor: gstate.locale?.formats?.avifBestFor || '高质量图片、现代浏览器',
      advantages: gstate.locale?.formats?.avifAdvantages || '极高压缩率、高质量、支持透明度',
      disadvantages: gstate.locale?.formats?.avifDisadvantages || '较新格式，浏览器支持有限',
    },
    {
      key: '5',
      format: gstate.locale?.formats?.svgTitle || 'SVG',
      extension: '.svg',
      description: gstate.locale?.formats?.svgDesc || '矢量图片格式，基于XML，适合图标和简单图形',
      compressionType: gstate.locale?.formats?.svgCompressionType || '矢量',
      bestFor: gstate.locale?.formats?.svgBestFor || '图标、标志、简单图形',
      advantages: gstate.locale?.formats?.svgAdvantages || '无限缩放、文件小、基于文本',
      disadvantages: gstate.locale?.formats?.svgDisadvantages || '不适合复杂图像、需要特殊编辑',
    },
    {
      key: '6',
      format: gstate.locale?.formats?.gifTitle || 'GIF',
      extension: '.gif',
      description: gstate.locale?.formats?.gifDesc || '支持动画的图片格式，使用有限颜色调色板',
      compressionType: gstate.locale?.formats?.gifCompressionType || '有损',
      bestFor: gstate.locale?.formats?.gifBestFor || '简单动画、低色彩图片',
      advantages: gstate.locale?.formats?.gifAdvantages || '支持动画、广泛支持',
      disadvantages: gstate.locale?.formats?.gifDisadvantages || '仅支持256色、文件可能较大',
    },
  ];

  const columns = [
    {
      title: gstate.locale?.formats?.formatColumn || '格式',
      dataIndex: 'format',
      key: 'format',
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: gstate.locale?.formats?.extensionColumn || '扩展名',
      dataIndex: 'extension',
      key: 'extension',
    },
    {
      title: gstate.locale?.formats?.descriptionColumn || '描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: gstate.locale?.formats?.compressionTypeColumn || '压缩类型',
      dataIndex: 'compressionType',
      key: 'compressionType',
    },
  ];

  if (isPC) {
    columns.push(
      {
        title: gstate.locale?.formats?.bestForColumn || '最佳用途',
        dataIndex: 'bestFor',
        key: 'bestFor',
      },
      {
        title: gstate.locale?.formats?.advantagesColumn || '优势',
        dataIndex: 'advantages',
        key: 'advantages',
      },
      {
        title: gstate.locale?.formats?.disadvantagesColumn || '劣势',
        dataIndex: 'disadvantages',
        key: 'disadvantages',
      }
    );
  }

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
        <Title level={isPC ? 2 : 3} style={{ textAlign: "center", marginBottom: "32px" }}>
          {gstate.locale?.formats?.title || '支持的图片格式详解'}
        </Title>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Paragraph>
              {gstate.locale?.formats?.description || 'Pic Smaller 支持多种流行的图片格式，每种格式都有其特定的用途和优势。了解不同格式的特点可以帮助您选择最适合的压缩选项。'}
            </Paragraph>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Table 
            columns={columns} 
            dataSource={formatData} 
            pagination={false}
            scroll={isPC ? undefined : { x: 800 }}
          />
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.formats?.suggestionTitle || '格式选择建议'}</Title>
            <Paragraph>
              <ul>
                <li>
                  <Text strong>{gstate.locale?.formats?.jpegTitle || 'JPEG'}：</Text>
                  {gstate.locale?.formats?.suggestionJpeg || '适用于照片和复杂图像，需要较小文件大小时的首选'}
                </li>
                <li>
                  <Text strong>{gstate.locale?.formats?.pngTitle || 'PNG'}：</Text>
                  {gstate.locale?.formats?.suggestionPng || '适用于需要透明背景的图片，如图标和图表'}
                </li>
                <li>
                  <Text strong>{gstate.locale?.formats?.webpTitle || 'WEBP'}：</Text>
                  {gstate.locale?.formats?.suggestionWebp || '现代浏览器的首选，提供最佳的压缩效果'}
                </li>
                <li>
                  <Text strong>{gstate.locale?.formats?.avifTitle || 'AVIF'}：</Text>
                  {gstate.locale?.formats?.suggestionAvif || '追求最高图像质量时的选择，压缩效率最佳'}
                </li>
                <li>
                  <Text strong>{gstate.locale?.formats?.svgTitle || 'SVG'}：</Text>
                  {gstate.locale?.formats?.suggestionSvg || '适用于矢量图形，如标志、图标和简单图形'}
                </li>
                <li>
                  <Text strong>{gstate.locale?.formats?.gifTitle || 'GIF'}：</Text>
                  {gstate.locale?.formats?.suggestionGif || '仅用于简单动画，现在通常被APNG或WebP动画替代'}
                </li>
              </ul>
            </Paragraph>
          </Typography>
        </Card>

        <Card>
          <Typography>
            <Title level={3}>{gstate.locale?.formats?.selectionTitle || '如何选择合适的格式？'}</Title>
            <Paragraph>
              <ul>
                <li>
                  {gstate.locale?.formats?.selectionTransparency || '如果需要保留透明度，选择 PNG 或 WEBP'}
                </li>
                <li>
                  {gstate.locale?.formats?.selectionPhoto || '如果图片是照片，JPEG 或 WEBP 通常是最佳选择'}
                </li>
                <li>
                  {gstate.locale?.formats?.selectionModern || '如果需要在现代浏览器中获得最佳压缩效果，选择 WEBP 或 AVIF'}
                </li>
                <li>
                  {gstate.locale?.formats?.selectionVector || '如果图片是矢量图形，SVG 是最佳选择'}
                </li>
              </ul>
            </Paragraph>
          </Typography>
        </Card>
      </Flex>
    </Flex>
  );
});

export default Formats;