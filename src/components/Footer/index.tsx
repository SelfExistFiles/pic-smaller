import { observer } from "mobx-react-lite";
import { Layout, Typography, Flex, Divider } from "antd";
import { goto } from "@/router";
import { gstate } from "@/global";

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = observer(() => {
  return (
    <AntFooter
      style={{
        marginTop: "40px",
        paddingTop: "20px",
        paddingBottom: "20px",
        textAlign: "center",
        background: "#f0f2f5",
      }}
    >
      <Flex vertical align="center">
        <Flex wrap="wrap" justify="center" style={{ marginBottom: "16px" }}>
          <Typography.Link
            onClick={() => goto("/about")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.aboutUs || "关于我们"}
          </Typography.Link>
          <Typography.Link
            onClick={() => goto("/guide")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.guide || "使用指南"}
          </Typography.Link>
          <Typography.Link
            onClick={() => goto("/formats")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.formats || "支持格式"}
          </Typography.Link>
          <Typography.Link
            onClick={() => goto("/faq")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.faq || "常见问题"}
          </Typography.Link>
          <Typography.Link
            onClick={() => goto("/compare")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.compare || "工具对比"}
          </Typography.Link>
          <Typography.Link
            onClick={() => goto("/usecases")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.useCases || "使用案例"}
          </Typography.Link>
          <Typography.Link
            onClick={() => goto("/contact")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.contact || "联系我们"}
          </Typography.Link>
          <Typography.Link
            onClick={() => goto("/privacy")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.privacy || "隐私政策"}
          </Typography.Link>
          <Typography.Link
            onClick={() => goto("/online-image-compression")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.onlineImageCompression || "在线图片压缩"}
          </Typography.Link>
          <Typography.Link
            onClick={() => goto("/bulk-image-processing")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.bulkProcessing || "批量处理"}
          </Typography.Link>
          <Typography.Link
            onClick={() => goto("/supported-formats")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.supportedFormats || "格式支持"}
          </Typography.Link>
          <Typography.Link
            onClick={() => goto("/technology")}
            style={{ margin: "0 10px", marginBottom: "8px", cursor: "pointer" }}
          >
            {gstate.locale?.footer?.technology || "技术详情"}
          </Typography.Link>
        </Flex>
        
        <Divider style={{ margin: "10px 0", width: "80%" }} />
        
        <Text type="secondary">
          © {new Date().getFullYear()} Pic Smaller - Free Online Image Compression Tool
        </Text>
      </Flex>
    </AntFooter>
  );
});

export default Footer;