import { observer } from "mobx-react-lite";
import { Card, Flex, Typography, Form, Input, Button, message } from "antd";
import { MailOutlined, EnvironmentOutlined, MessageOutlined } from "@ant-design/icons";
import { useResponse } from "@/media";
import { gstate } from "@/global";

const { Title, Paragraph, Text } = Typography;

const Contact = observer(() => {
  const { isPC } = useResponse();
  const [form] = Form.useForm();

  interface ContactFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  const onFinish = (values: ContactFormValues) => {
    console.log('Received values:', values);
    message.success(gstate.locale?.contact?.successMessage || '您的消息已发送！我们会尽快回复您。');
    form.resetFields();
  };

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
          {gstate.locale?.contact?.title || '联系我们'}
        </Title>

        <Card style={{ marginBottom: 30 }}>
          <Flex vertical={isPC} align={isPC ? "flex-start" : "center"} justify="space-between" gap={30}>
            <Flex vertical style={{ flex: 1 }}>
              <Title level={3} style={{ marginBottom: 16 }}>{gstate.locale?.contact?.title || '与我们联系'}</Title>
              <Paragraph style={{ fontSize: "1.1em", lineHeight: 1.8, marginBottom: 20 }}>
                {gstate.locale?.contact?.description || '如果您有任何问题、建议或反馈，请随时与我们联系。我们重视每一位用户的意见，并致力于不断改进 Pic Smaller 图片压缩工具。'}
              </Paragraph>
              
              <Flex vertical gap={16}>
                <Flex align="center">
                  <MailOutlined style={{ fontSize: 20, color: '#1890ff', marginRight: 12 }} />
                  <Text strong>{gstate.locale?.contact?.emailLabel || '邮箱: '}</Text>
                  <Text>{gstate.locale?.contact?.emailValue || 'contact@picsmaller.com'}</Text>
                </Flex>
                
                <Flex align="center">
                  <EnvironmentOutlined style={{ fontSize: 20, color: '#52c41a', marginRight: 12 }} />
                  <Text strong>{gstate.locale?.contact?.addressLabel || '地址: '}</Text>
                  <Text>{gstate.locale?.contact?.addressValue || '中国，上海'}</Text>
                </Flex>
                
                <Flex align="center">
                  <MessageOutlined style={{ fontSize: 20, color: '#722ed1', marginRight: 12 }} />
                  <Text strong>{gstate.locale?.contact?.serviceLabel || '服务: '}</Text>
                  <Text>{gstate.locale?.contact?.serviceValue || '24/7 在线服务'}</Text>
                </Flex>
              </Flex>
            </Flex>
            
            <div style={{ flex: 1, minWidth: isPC ? 300 : "100%" }}>
              <Card title={gstate.locale?.contact?.formTitle || '发送消息'} size="small">
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="name"
                    label={gstate.locale?.contact?.nameLabel || '姓名'}
                    rules={[{ required: true, message: gstate.locale?.contact?.nameError || '请输入您的姓名' }]}
                  >
                    <Input placeholder={gstate.locale?.contact?.namePlaceholder || '请输入您的姓名'} />
                  </Form.Item>
                  
                  <Form.Item
                    name="email"
                    label={gstate.locale?.contact?.emailLabelForm || '邮箱'}
                    rules={[
                      { required: true, message: gstate.locale?.contact?.emailError || '请输入您的邮箱' },
                      { type: 'email', message: gstate.locale?.contact?.emailError || '请输入有效的邮箱地址' }
                    ]}
                  >
                    <Input placeholder={gstate.locale?.contact?.emailPlaceholder || '请输入您的邮箱'} />
                  </Form.Item>
                  
                  <Form.Item
                    name="subject"
                    label={gstate.locale?.contact?.subjectLabel || '主题'}
                    rules={[{ required: true, message: gstate.locale?.contact?.subjectError || '请输入消息主题' }]}
                  >
                    <Input placeholder={gstate.locale?.contact?.subjectPlaceholder || '请输入消息主题'} />
                  </Form.Item>
                  
                  <Form.Item
                    name="message"
                    label={gstate.locale?.contact?.messageLabel || '消息内容'}
                    rules={[{ required: true, message: gstate.locale?.contact?.messageError || '请输入您的消息内容' }]}
                  >
                    <Input.TextArea 
                      rows={4} 
                      placeholder={gstate.locale?.contact?.messagePlaceholder || '请输入您的消息内容'} 
                    />
                  </Form.Item>
                  
                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit"
                      style={{ width: '100%' }}
                    >
                      {gstate.locale?.contact?.submitButton || '发送消息'}
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </Flex>
        </Card>

        <Flex gap={20} style={{ width: "100%" }} vertical={!isPC}>
          <Card style={{ flex: 1 }}>
            <Flex align="center" style={{ marginBottom: 16 }}>
              <MailOutlined style={{ fontSize: 24, color: '#1890ff', marginRight: 12 }} />
              <Title level={4} style={{ margin: 0 }}>{gstate.locale?.contact?.businessTitle || '业务合作'}</Title>
            </Flex>
            <Paragraph>
              {gstate.locale?.contact?.businessDesc || '如果您希望与我们进行业务合作或批量使用 Pic Smaller，请通过邮件与我们联系，我们提供定制化的解决方案。'}
            </Paragraph>
          </Card>
          
          <Card style={{ flex: 1 }}>
            <Flex align="center" style={{ marginBottom: 16 }}>
              <MessageOutlined style={{ fontSize: 24, color: '#52c41a', marginRight: 12 }} />
              <Title level={4} style={{ margin: 0 }}>{gstate.locale?.contact?.supportTitle || '技术支持'}</Title>
            </Flex>
            <Paragraph>
              {gstate.locale?.contact?.supportDesc || '如果您在使用过程中遇到任何技术问题，我们的技术支持团队随时为您提供帮助和解决方案。'}
            </Paragraph>
          </Card>
          
          <Card style={{ flex: 1 }}>
            <Flex align="center" style={{ marginBottom: 16 }}>
              <EnvironmentOutlined style={{ fontSize: 24, color: '#722ed1', marginRight: 12 }} />
              <Title level={4} style={{ margin: 0 }}>{gstate.locale?.contact?.feedbackTitle || '反馈建议'}</Title>
            </Flex>
            <Paragraph>
              {gstate.locale?.contact?.feedbackDesc || '我们始终在寻找改进方法。如果您有任何建议或功能请求，请告诉我们，帮助我们让 Pic Smaller 更好用。'}
            </Paragraph>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
});

export default Contact;