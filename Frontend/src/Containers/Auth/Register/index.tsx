import { Col, Row, Typography, Layout, Input, Form, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { signInUser } from "../../../redux/Slice/authSlice";

const { Title, Text } = Typography;
const { Content } = Layout;

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [form] = Form.useForm();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    console.log(form.getFieldValue("confirmPassword"), newPassword);
    setPassword(newPassword);
    if (newPassword.length === 0) {
      setError(" None of the fields can be blank");
    } else if (newPassword !== form.getFieldValue("confirmPassword")) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    console.log(form.getFieldValue("password"), newConfirmPassword);
    setConfirmPassword(newConfirmPassword);
    if (newConfirmPassword.length === 0) {
      setError("None of the fields can be blank");
    } else if (newConfirmPassword !== form.getFieldValue("password")) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const onSubmit = async (values: any) => {
    const { username, email, password } = values;
    try {
      await dispatch(
        signInUser({
          username: username,
          email: email,
          password1: password,
          password2: password,
        })
      );
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <Content style={{ height: "100vh" }}>
      <Row>
        <Col sm={{ span: 14 }}>
          <Col span={12} offset={6}>
            <Title
              style={{
                textAlign: "left",
                marginBottom: "40px",
                marginTop: "100px",
              }}
              level={3}
            >
              Register
            </Title>

            <Form
              form={form}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 18 }}
              style={{ maxWidth: 600 }}
              onFinish={onSubmit}
              autoComplete="off"
            >
              <Form.Item name="username">
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    // type: "email",
                    // required: true,
                    // message: "Please enter a valid email!",

                    validator: (_, value) => {
                      if (
                        !value ||
                        /^[^\s@]{1,20}@[^\s@]+\.[^\s@]{1,3}$/.test(value)
                      ) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Please enter a valid email!");
                    },
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password
                  placeholder=" Password"
                  value={password}
                  onChange={handlePasswordChange}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>

              <Form.Item name="confirmPassword">
                <Input.Password
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 18 }}>
                <Button
                  htmlType="submit"
                  type="primary"
                  disabled={
                    error !== "" || password === "" || confirmPassword === ""
                  }
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            {error && <p style={{ color: "red", marginTop: "0" }}>{error}</p>}
            <Content style={{ textAlign: "left", marginTop: "20px" }}>
              <Text> Already have an account? </Text>
              <Button
                style={{ padding: "0" }}
                onClick={() => navigate("/")}
                type="link"
              >
                Log in
              </Button>
            </Content>
          </Col>
        </Col>
      </Row>
    </Content>
  );
};

export default SignUp;
