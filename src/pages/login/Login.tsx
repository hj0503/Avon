import React, { PureComponent } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import './index.less'

const FormItem = Form.Item;

interface LoginProps {
  loginLoading: boolean,
  onLogin: () => void
}

export default class Login extends PureComponent<LoginProps> {
  render() {
    const { onLogin, loginLoading } = this.props
    return (
      <Form className="login-form">
        <FormItem>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        </FormItem>
        <FormItem>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        </FormItem>
        <FormItem>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={ loginLoading }
            onClick={ () => onLogin() }
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}
