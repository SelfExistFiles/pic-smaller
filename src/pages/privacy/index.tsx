import { observer } from "mobx-react-lite";
import { Card, Flex, Typography } from "antd";
import { SecurityScanOutlined, LockOutlined, FileTextOutlined } from "@ant-design/icons";
import { useResponse } from "@/media";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const Privacy = observer(() => {
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
          {gstate.locale?.privacy?.title || '隐私政策'}
        </Title>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Flex align="center" style={{ marginBottom: 16 }}>
              <SecurityScanOutlined style={{ fontSize: 24, color: '#52c41a', marginRight: 8 }} />
              <Title level={4} style={{ margin: 0 }}>{gstate.locale?.privacy?.securityTitle || '数据安全承诺'}</Title>
            </Flex>
            <Paragraph>
              {gstate.locale?.privacy?.securityDesc || '我们深知隐私对您的重要性，因此我们承诺 Pic Smaller 不会收集、存储或传输您的任何个人数据。所有图片压缩处理均在您的浏览器本地完成，您的图片永远不会上传到任何服务器。'}
            </Paragraph>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Flex align="center" style={{ marginBottom: 16 }}>
              <LockOutlined style={{ fontSize: 24, color: '#1890ff', marginRight: 8 }} />
              <Title level={4} style={{ margin: 0 }}>{gstate.locale?.privacy?.localTitle || '本地处理'}</Title>
            </Flex>
            <Paragraph>
              {gstate.locale?.privacy?.localDesc || 'Pic Smaller 是一个完全基于浏览器的图片压缩工具，所有处理过程都在您的设备上完成：'}
            </Paragraph>
            <ul>
              <li>{gstate.locale?.privacy?.localPoint1 || '图片文件仅存在于您的浏览器内存中'}</li>
              <li>{gstate.locale?.privacy?.localPoint2 || '不会向任何外部服务器发送图片数据'}</li>
              <li>{gstate.locale?.privacy?.localPoint3 || '压缩过程完全离线，不依赖网络传输'}</li>
              <li>{gstate.locale?.privacy?.localPoint4 || '关闭页面后，所有数据将被自动清除'}</li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Flex align="center" style={{ marginBottom: 16 }}>
              <FileTextOutlined style={{ fontSize: 24, color: '#722ed1', marginRight: 8 }} />
              <Title level={4} style={{ margin: 0 }}>{gstate.locale?.privacy?.infoTitle || '信息收集'}</Title>
            </Flex>
            <Paragraph>
              {gstate.locale?.privacy?.infoDesc || '我们不收集任何个人身份信息：'}
            </Paragraph>
            <ul>
              <li>{gstate.locale?.privacy?.infoPoint1 || '不收集姓名、邮箱、电话等个人身份信息'}</li>
              <li>{gstate.locale?.privacy?.infoPoint2 || '不跟踪您的浏览习惯或使用模式'}</li>
              <li>{gstate.locale?.privacy?.infoPoint3 || '不使用追踪 Cookie 或类似技术'}</li>
              <li>{gstate.locale?.privacy?.infoPoint4 || '不收集任何可用于识别您身份的数据'}</li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.privacy?.techTitle || '技术细节'}</Title>
            <Paragraph>
              {gstate.locale?.privacy?.techDesc || 'Pic Smaller 使用现代浏览器技术实现本地图片压缩：'}
            </Paragraph>
            <ul>
              <li>
                <Text strong>{gstate.locale?.privacy?.canvasDesc || 'Canvas API：用于图片处理和格式转换'}</Text>
              </li>
              <li>
                <Text strong>{gstate.locale?.privacy?.wasmDesc || 'WebAssembly：提供高效的压缩算法实现'}</Text>
              </li>
              <li>
                <Text strong>{gstate.locale?.privacy?.workersDesc || 'Web Workers：在后台线程执行压缩任务，避免阻塞用户界面'}</Text>
              </li>
              <li>
                <Text strong>{gstate.locale?.privacy?.offscreenDesc || 'OffscreenCanvas：优化图片处理性能'}</Text>
              </li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.privacy?.thirdPartyTitle || '第三方服务'}</Title>
            <Paragraph>
              {gstate.locale?.privacy?.thirdPartyDesc || 'Pic Smaller 不集成任何第三方分析、广告或数据收集服务：'}
            </Paragraph>
            <ul>
              <li>{gstate.locale?.privacy?.thirdPartyPoint1 || '不使用 Google Analytics 或其他分析工具'}</li>
              <li>{gstate.locale?.privacy?.thirdPartyPoint2 || '不显示任何广告'}</li>
              <li>{gstate.locale?.privacy?.thirdPartyPoint3 || '不集成社交媒体分享按钮'}</li>
              <li>{gstate.locale?.privacy?.thirdPartyPoint4 || '不使用任何第三方追踪服务'}</li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.privacy?.securityTitle || '安全措施'}</Title>
            <Paragraph>
              {gstate.locale?.privacy?.securityDesc || '为确保您的数据安全，我们采取了以下措施：'}
            </Paragraph>
            <ul>
              <li>{gstate.locale?.privacy?.securityPoint1 || '所有代码开源，可接受公众审查'}</li>
              <li>{gstate.locale?.privacy?.securityPoint2 || '不存储任何用户数据在服务器上'}</li>
              <li>{gstate.locale?.privacy?.securityPoint3 || '使用 HTTPS 加密传输（当访问网站时）'}</li>
              <li>{gstate.locale?.privacy?.securityPoint4 || '不访问或请求任何不必要的浏览器权限'}</li>
            </ul>
          </Typography>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Typography>
            <Title level={3}>{gstate.locale?.privacy?.rightsTitle || '您的权利'}</Title>
            <Paragraph>
              {gstate.locale?.privacy?.rightsDesc || '作为用户，您拥有以下权利：'}
            </Paragraph>
            <ul>
              <li>{gstate.locale?.privacy?.rightsPoint1 || '完全控制您的图片数据'}</li>
              <li>{gstate.locale?.privacy?.rightsPoint2 || '随时关闭页面以清除所有数据'}</li>
              <li>{gstate.locale?.privacy?.rightsPoint3 || '无需注册或提供个人信息即可使用全部功能'}</li>
              <li>{gstate.locale?.privacy?.rightsPoint4 || '选择不使用我们的服务而不会产生任何后果'}</li>
            </ul>
          </Typography>
        </Card>

        <Card>
          <Typography>
            <Title level={3}>{gstate.locale?.privacy?.contactTitle || '联系我们'}</Title>
            <Paragraph>
              {gstate.locale?.privacy?.contactDesc || '如果您对我们的隐私政策有任何疑问，请通过项目 GitHub 页面联系我们。我们承诺在收到询问后尽快回复。'}
            </Paragraph>
            <Paragraph>
              {gstate.locale?.privacy?.policyDesc || '本隐私政策可能会不时更新，但核心原则保持不变：我们不会收集、存储或传输您的任何个人数据。'}
            </Paragraph>
          </Typography>
        </Card>
      </Flex>
    </Flex>
  );
});

export default Privacy;