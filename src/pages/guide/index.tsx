import { observer } from "mobx-react-lite";
import { Button, Card, Flex, Steps, Typography } from "antd";
import { LinkOutlined, ThunderboltOutlined, SafetyCertificateOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { useResponse } from "@/media";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const Guide = observer(() => {
  const { isPC } = useResponse();

  const steps = [
    {
      title: gstate.locale?.guide?.step1Title || '上传图片',
      description: gstate.locale?.guide?.step1Desc || '拖拽图片文件到上传区域，或点击上传按钮选择文件',
      icon: <LinkOutlined />,
    },
    {
      title: gstate.locale?.guide?.step2Title || '调整参数',
      description: gstate.locale?.guide?.step2Desc || '根据需要调整压缩质量、尺寸等参数',
      icon: <ThunderboltOutlined />,
    },
    {
      title: gstate.locale?.guide?.step3Title || '预览效果',
      description: gstate.locale?.guide?.step3Desc || '实时查看压缩前后的对比效果',
      icon: <CheckCircleOutlined />,
    },
    {
      title: gstate.locale?.guide?.step4Title || '下载图片',
      description: gstate.locale?.guide?.step4Desc || '确认效果后下载压缩优化的图片',
      icon: <SafetyCertificateOutlined />,
    },
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
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <Title level={isPC ? 2 : 3} style={{ textAlign: "center", marginBottom: "32px" }}>
          {gstate.locale?.guide?.title || '图片压缩使用指南'}
        </Title>

        <Card style={{ marginBottom: 30 }}>
          <Steps
            current={-1}
            items={steps}
            direction={isPC ? "horizontal" : "vertical"}
            size="small"
          />
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>1. {gstate.locale?.guide?.uploadTitle || '上传图片'}</Title>
            <Paragraph>
              {gstate.locale?.guide?.uploadDesc || '您可以通过以下方式上传图片：'}
            </Paragraph>
            <ul>
              <li>
                <Text strong>{gstate.locale?.guide?.uploadDesc1 || '拖拽上传：'}</Text>
                {gstate.locale?.guide?.uploadDragDesc || '直接将图片文件拖拽到主页的上传区域'}
              </li>
              <li>
                <Text strong>{gstate.locale?.guide?.uploadDesc2 || '点击上传：'}</Text>
                {gstate.locale?.guide?.uploadClickDesc || '点击上传卡片选择图片文件'}
              </li>
              <li>
                <Text strong>{gstate.locale?.guide?.uploadDesc3 || '粘贴上传：'}</Text>
                {gstate.locale?.guide?.uploadPasteDesc || '复制图片后使用 Ctrl+V 快捷键粘贴'}
              </li>
            </ul>
            <Paragraph>
              {gstate.locale?.guide?.formatsDesc || '支持的格式包括：JPEG、PNG、WEBP、AVIF、SVG 和 GIF。'}
            </Paragraph>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>2. {gstate.locale?.guide?.adjustTitle || '调整压缩参数'}</Title>
            <Paragraph>
              {gstate.locale?.guide?.adjustDesc || '上传图片后，您可以在右侧选项面板中调整以下参数：'}
            </Paragraph>
            <ul>
              <li>
                <Text strong>{gstate.locale?.guide?.adjustQuality || '压缩质量：'}</Text>
                {gstate.locale?.guide?.adjustQualityDesc || '调整 JPEG 和 WebP 图片的压缩质量（1%-100%）'}
              </li>
              <li>
                <Text strong>{gstate.locale?.guide?.adjustSize || '图片尺寸：'}</Text>
                {gstate.locale?.guide?.adjustSizeDesc || '调整图片的宽度和高度（支持百分比或具体像素）'}
              </li>
              <li>
                <Text strong>{gstate.locale?.guide?.adjustFormat || '输出格式：'}</Text>
                {gstate.locale?.guide?.adjustFormatDesc || '选择压缩后的图片格式'}
              </li>
              <li>
                <Text strong>{gstate.locale?.guide?.adjustColors || '颜色数量：'}</Text>
                {gstate.locale?.guide?.adjustColorsDesc || '对于某些格式，可以限制颜色数量以进一步减小文件大小'}
              </li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>3. {gstate.locale?.guide?.previewTitle || '预览压缩效果'}</Title>
            <Paragraph>
              {gstate.locale?.guide?.previewDesc || '在调整参数时，您可以实时查看压缩效果：'}
            </Paragraph>
            <ul>
              <li>
                <Text strong>{gstate.locale?.guide?.previewCompare || '对比查看：'}</Text>
                {gstate.locale?.guide?.previewCompareDesc || '使用对比滑块查看原始图片和压缩后图片的差异'}
              </li>
              <li>
                <Text strong>{gstate.locale?.guide?.previewSize || '文件大小：'}</Text>
                {gstate.locale?.guide?.previewSizeDesc || '实时显示压缩前后的文件大小和节省的空间'}
              </li>
              <li>
                <Text strong>{gstate.locale?.guide?.previewQuality || '质量百分比：'}</Text>
                {gstate.locale?.guide?.previewQualityDesc || '显示压缩后文件大小相对于原文件的百分比'}
              </li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>4. {gstate.locale?.guide?.downloadTitle || '下载压缩图片'}</Title>
            <Paragraph>
              {gstate.locale?.guide?.downloadDesc || '确认压缩效果满意后，您可以：'}
            </Paragraph>
            <ul>
              <li>
                <Text strong>{gstate.locale?.guide?.downloadSingle || '单张下载：'}</Text>
                {gstate.locale?.guide?.downloadSingleDesc || '点击单张图片旁边的下载按钮'}
              </li>
              <li>
                <Text strong>{gstate.locale?.guide?.downloadBatch || '批量下载：'}</Text>
                {gstate.locale?.guide?.downloadBatchDesc || '点击右上角的"下载全部"按钮'}
              </li>
              <li>
                <Text strong>{gstate.locale?.guide?.downloadReset || '重置参数：'}</Text>
                {gstate.locale?.guide?.downloadResetDesc || '如果不满意效果，可以点击重置按钮恢复默认设置'}
              </li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.guide?.tipsTitle || '压缩技巧'}</Title>
            <Paragraph>
              <ul>
                <li>
                  {gstate.locale?.guide?.tip1 || '对照片类图片，质量设置在 80%-90% 通常能获得较好的效果'}
                </li>
                <li>
                  {gstate.locale?.guide?.tip2 || '对于图标或简单图形，PNG 格式可能比 JPEG 更适合'}
                </li>
                <li>
                  {gstate.locale?.guide?.tip3 || '使用尺寸调整可以显著减少文件大小'}
                </li>
                <li>
                  {gstate.locale?.guide?.tip4 || '现代格式如 WebP 和 AVIF 通常能提供更好的压缩效果'}
                </li>
              </ul>
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
            {gstate.locale?.guide?.getStarted || '立即使用压缩工具'}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
});

export default Guide;