import { observer } from "mobx-react-lite";
import { Card, Flex, Tag, Typography } from "antd";
import { CodeOutlined, ThunderboltOutlined, ClusterOutlined } from "@ant-design/icons";
import { useResponse } from "@/media";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const Technology = observer(() => {
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
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <Title level={isPC ? 2 : 3} style={{ textAlign: "center", marginBottom: "32px" }}>
          {gstate.locale?.technology?.title || '图片压缩技术详解'}
        </Title>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Flex align="center" style={{ marginBottom: 16 }}>
              <CodeOutlined style={{ fontSize: 24, color: '#fa8c16', marginRight: 8 }} />
              <Title level={4} style={{ margin: 0 }}>{gstate.locale?.technology?.coreTitle || '核心技术'}</Title>
            </Flex>
            <Paragraph>
              {gstate.locale?.technology?.coreDesc || 'Pic Smaller 采用现代浏览器技术，实现了完全本地化的图片压缩功能。所有处理都在您的设备上完成，无需上传图片到服务器，确保隐私安全。'}
            </Paragraph>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.technology?.stackTitle || '浏览器技术栈'}</Title>
            <Paragraph>
              {gstate.locale?.technology?.stackDesc || '我们的压缩工具基于以下现代浏览器 API：'}
            </Paragraph>
            <ul>
              <li>
                <Text strong>{gstate.locale?.technology?.canvasDesc || 'Canvas API：用于图片处理、格式转换和质量调整'}</Text>
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.wasmDesc || 'WebAssembly (WASM)：提供接近原生性能的压缩算法实现'}</Text>
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.workersDesc || 'Web Workers：在后台线程执行压缩任务，避免阻塞用户界面'}</Text>
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.offscreenDesc || 'OffscreenCanvas：优化图片处理性能，提升用户体验'}</Text>
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.blobDesc || 'Blob API：处理二进制图片数据并生成压缩后的文件'}</Text>
              </li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.technology?.algTitle || '支持的压缩算法'}</Title>
            <Flex wrap="wrap" style={{ marginTop: 16 }}>
              <Tag color="blue" style={{ marginBottom: 8 }}>{gstate.locale?.technology?.algDesc || '支持多种压缩算法'}</Tag>
            </Flex>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Flex align="center" style={{ marginBottom: 16 }}>
              <ThunderboltOutlined style={{ fontSize: 24, color: '#52c41a', marginRight: 8 }} />
              <Title level={4} style={{ margin: 0 }}>{gstate.locale?.technology?.perfTitle || '性能优化'}</Title>
            </Flex>
            <Paragraph>
              {gstate.locale?.technology?.perfDesc || '为确保快速的压缩体验，我们实现了多项性能优化：'}
            </Paragraph>
            <ul>
              <li>
                <Text strong>{gstate.locale?.technology?.perfPoint1 || '并行处理：'}</Text>
                {(gstate.locale?.technology?.perfPoint1 || '').replace(/.*：/, '') || '使用 Web Workers 在后台线程处理多个图片'}
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.perfPoint2 || '渐进式加载：'}</Text>
                {(gstate.locale?.technology?.perfPoint2 || '').replace(/.*：/, '') || '支持大图片的渐进式处理，避免内存问题'}
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.perfPoint3 || '智能缓存：'}</Text>
                {(gstate.locale?.technology?.perfPoint3 || '').replace(/.*：/, '') || '优化重复操作的处理速度'}
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.perfPoint4 || '格式特定算法：'}</Text>
                {(gstate.locale?.technology?.perfPoint4 || '').replace(/.*：/, '') || '针对不同图片格式使用最优化的压缩算法'}
              </li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Flex align="center" style={{ marginBottom: 16 }}>
              <ClusterOutlined style={{ fontSize: 24, color: '#1890ff', marginRight: 8 }} />
              <Title level={4} style={{ margin: 0 }}>{gstate.locale?.technology?.principleTitle || '压缩原理'}</Title>
            </Flex>
            <Paragraph>
              {gstate.locale?.technology?.principleDesc || '不同图片格式的压缩原理：'}
            </Paragraph>
            <ul>
              <li>
                <Text strong>JPEG：</Text>
                {gstate.locale?.technology?.jpegDesc || '使用离散余弦变换 (DCT) 进行有损压缩，通过减少高频信息来减小文件大小'}
              </li>
              <li>
                <Text strong>PNG：</Text>
                {gstate.locale?.technology?.pngDesc || '使用无损压缩，基于 DEFLATE 算法，适合具有大面积相同颜色的图像'}
              </li>
              <li>
                <Text strong>WebP：</Text>
                {gstate.locale?.technology?.webpDesc || '结合了有损和无损压缩技术，基于 VP8/VP9 视频编码技术'}
              </li>
              <li>
                <Text strong>AVIF：</Text>
                {gstate.locale?.technology?.avifDesc || '基于 AV1 视频编码的图片格式，提供最佳的压缩效率'}
              </li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.technology?.qualityTitle || '质量与大小平衡'}</Title>
            <Paragraph>
              {gstate.locale?.technology?.qualityDesc || '我们在压缩过程中实现了智能质量控制：'}
            </Paragraph>
            <ul>
              <li>
                <Text strong>{gstate.locale?.technology?.qualityPoint1 || '视觉质量保持：'}</Text>
                {(gstate.locale?.technology?.qualityPoint1 || '').replace(/.*：/, '') || '算法在压缩时会考虑人眼对不同颜色和细节的敏感度'}
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.qualityPoint2 || '文件大小优化：'}</Text>
                {(gstate.locale?.technology?.qualityPoint2 || '').replace(/.*：/, '') || '在可接受的质量损失范围内最大化文件压缩率'}
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.qualityPoint3 || '格式转换智能：'}</Text>
                {(gstate.locale?.technology?.qualityPoint3 || '').replace(/.*：/, '') || '根据图片内容推荐最合适的输出格式'}
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.qualityPoint4 || '实时预览：'}</Text>
                {(gstate.locale?.technology?.qualityPoint4 || '').replace(/.*：/, '') || '提供压缩前后对比，让用户自主判断质量是否可接受'}
              </li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.technology?.ossTitle || '开源技术栈'}</Title>
            <Paragraph>
              {gstate.locale?.technology?.ossDesc || 'Pic Smaller 使用以下开源技术：'}
            </Paragraph>
            <ul>
              <li>
                <Text strong>{gstate.locale?.technology?.reactDesc || 'React：构建用户界面的 JavaScript 库'}</Text>
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.viteDesc || 'Vite：现代前端构建工具，提供快速的开发体验'}</Text>
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.antdDesc || 'Ant Design：企业级 UI 设计语言和组件库'}</Text>
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.tsDesc || 'TypeScript：JavaScript 的超集，提供静态类型检查'}</Text>
              </li>
              <li>
                <Text strong>{gstate.locale?.technology?.wasmDescTech || 'WASM 压缩库：针对不同格式的专门优化的 WebAssembly 压缩库'}</Text>
              </li>
            </ul>
          </Typography>
        </Card>

        <Card>
          <Typography>
            <Title level={3}>{gstate.locale?.technology?.futureTitle || '未来发展'}</Title>
            <Paragraph>
              {gstate.locale?.technology?.futureDesc || '我们持续关注图片压缩技术的发展，计划未来集成：'}
            </Paragraph>
            <ul>
              <li>{gstate.locale?.technology?.futurePoint1 || '更先进的压缩算法'}</li>
              <li>{gstate.locale?.technology?.futurePoint2 || 'AI 驱动的智能压缩'}</li>
              <li>{gstate.locale?.technology?.futurePoint3 || '更多图片格式支持'}</li>
              <li>{gstate.locale?.technology?.futurePoint4 || '更精细的质量控制选项'}</li>
            </ul>
          </Typography>
        </Card>
      </Flex>
    </Flex>
  );
});

export default Technology;