import React from "react";
import { Form, Icon, Input, Button, Checkbox, Card, Row, Col } from "antd";

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="wrapper__login">
        <div className="login__container">
          <Card
            style={{ width: 312 }}
            title="KPD 관리자"
            headStyle={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.3rem"
            }}
            bodyStyle={{
              boxShadow: "inset 0px 0px 19px -8px rgba(0,0,0,0.32)"
            }}
          >
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [{ required: true, message: "아이디를 입력해주세요." }]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="아이디"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "패스워드를 입력해주세요" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="패스워드"
                  />
                )}
              </Form.Item>
              <p className="login__text--warn">
                현재 페이지는 관리자 전용페이지 입니다.
              </p>
              <Form.Item>
                {/* remember me */}
                {/* <Row>
                  <Col>
                    {getFieldDecorator("remember", {
                      valuePropName: "checked",
                      initialValue: true
                    })(<Checkbox>Remember me</Checkbox>)}
                  </Col>
                </Row> */}
                <Row>
                  <Col>
                    <Button
                      // type="primary"
                      htmlType="submit"
                      block
                      className="login__btn"
                    >
                      로그인
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

const WrappedLogin = Form.create({ name: "normal_login" })(Login);

export default WrappedLogin;
