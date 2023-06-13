import React, { useState } from "react";
import { Button, Card, Col, Form, Image, Input, Row, Space } from "antd";

const Auth = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Card
      bordered={false}
      style={{
        width: "80%",
        height: "80vh",
        overflow: "hidden",
      }}
      bodyStyle={{
        padding: 0,
        height: "100%",
      }}
    >
      <Row style={{ height: "100%" }}>
        <Col xs={0} md={12}>
          <Image
            preview={false}
            src="images/img-left.jpg"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Col>
        <Col xs={24} md={12}>
          <Space
            align="center"
            direction="vertical"
            size={20}
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              backgroundColor: "#ffba33",
            }}
            styles={{
              item: {
                width: "80%",
              },
            }}
          >
            <Card
              title="Already Member"
              extra={<a href="/">Need Help?</a>}
              style={{
                width: "100%",
              }}
            >
              <Form autoComplete="off">
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                  />
                </Form.Item>
                <Form.Item style={{ marginBottom: 0 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    Sign in
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            <Space
              direction="vertical"
              size={5}
              align="center"
              style={{ width: "100%" }}
            >
              <p style={{ margin: 0, color: "#fff" }}>
                Don't have an account yet?
              </p>
              <a href="/">Create an account</a>
            </Space>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default Auth;
