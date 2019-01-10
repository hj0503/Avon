import React, { PureComponent } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "./index.less";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { connect } from "react-redux";
import { fetchUserInfo } from "src/reducers/authReducer";
import { withRouter, RouteComponentProps } from "react-router";
import md5 from "js-md5";

const FormItem = Form.Item;

interface LoginProps extends RouteComponentProps {
  history;
  form: WrappedFormUtils;
  fetchUserInfo: (params) => Promise<any>;
}

class Login extends PureComponent<LoginProps> {
  readonly state = {
    loginLoading: false
  };

  handleLogin = e => {
    const { history, form } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loginLoading: true
        });
        const { username, password } = values;
        const params = {
          username,
          password: md5(password),
          remeberMe: "true"
        };
        this.props.fetchUserInfo(params).then(() => {
          this.setState({
            loginLoading: false
          });
          history.push("/index");
        });
      }
    });
  };

  onChange = event => {
    const e = event.target;
    this.setState({
      [e.name]: e.value
    });
  };
  render() {
    const {
      form: { getFieldDecorator }
    } = this.props;
    const { loginLoading } = this.state;
    return (
      <Form className="login-form" onSubmit={this.handleLogin}>
        <FormItem>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入你的用户名" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              name="username"
              type="test"
              onChange={this.onChange}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入你的密码" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              name="password"
              type="password"
              onChange={this.onChange}
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" onClick={() => console.log("test")}>
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loginLoading}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    async fetchUserInfo(params) {
      await dispatch(fetchUserInfo(params));
    }
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Form.create({})(Login))
);
