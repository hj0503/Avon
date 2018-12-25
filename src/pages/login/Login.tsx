import React, { PureComponent } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "./index.less";

const FormItem = Form.Item;

interface LoginProps {
  loginLoading: boolean;
  onLogin: (username: string, password: string) => void;
  onLogout: () => void;
}

export default class Login extends PureComponent<LoginProps> {
  readonly state = {
    username: "yangzihao",
    password: "123"
  };

  onChange = event => {
    const e = event.target;
    this.setState({
      [e.name]: e.value
    });
  };
  render() {
    const { onLogin, loginLoading, onLogout } = this.props;
    const { username, password } = this.state;
    return (
      <Form className="login-form">
        <FormItem>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            name="username"
            value={username}
            type="test"
            onChange={this.onChange}
            placeholder="Username"
          />
        </FormItem>
        <FormItem>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            name="password"
            value={password}
            type="password"
            onChange={this.onChange}
            placeholder="Password"
          />
        </FormItem>
        <FormItem>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" onClick={() => onLogout()}>
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loginLoading}
            onClick={() => onLogin(username, password)}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}
