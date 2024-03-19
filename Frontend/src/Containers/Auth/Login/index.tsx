import { Col, Row, Typography, Layout, Button, Form, Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LoginUser } from "../../../redux/Slice/authSlice";
import { useNavigate } from "react-router-dom";

const { Title, Text, Link } = Typography;
const { Content } = Layout;

// const { user, loading, error } = useSelector(
//   (state: any) => state.user.userData
// );

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    const { email, password } = values;
    dispatch(LoginUser({ username: email, password: password }));
    navigate("/ad-page")
  };

  return (
    <Content style={{ height: "100vh", background: "white" }}>
      <Row>
        <Col span={14}>
          <Col span={12} offset={6}>
            <Title
              style={{
                textAlign: "left",
                marginBottom: "40px",
                marginTop: "100px",
              }}
              level={3}
            >
              Sign in
            </Title>

            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 18 }}
              style={{ maxWidth: 600 }}
              onFinish={onSubmit}
              autoComplete="off"
            >
              <Form.Item name="email">
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item name="password">
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Content style={{ textAlign: "left", marginTop: "20px" }}>
                <Text> Don't have an account? </Text>
                <Button
                  style={{ padding: "0" }}
                  onClick={() => navigate("/register")}
                  type="link"
                >
                  Sign up!
                </Button>
              </Content>
              <Form.Item wrapperCol={{ span: 18 }}>
                <Button type="primary" htmlType="submit">
                  Log in
                  <ArrowRightOutlined />
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Col>
      </Row>
    </Content>
  );
};

export default SignIn;
