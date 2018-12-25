import React, { PureComponent } from "react";
import Login from "./Login";
import { withRouter, RouteComponentProps } from "react-router";
import { logout, from } from "src/api/userInfo";
import md5 from "js-md5";

interface IndexProps extends RouteComponentProps {
  history: any;
}

class Index extends PureComponent<IndexProps> {
  readonly state = {
    loginLoading: false
  };
  onLogin = async (username, password) => {
    const { history } = this.props
    this.setState({ loginLoading: true });
    const params = {
      username,
      password: md5(password)
    };
    const body = await from(params);
    if(body.succeed) {
      history.push('/index')
    } else {
      alert(body.message)
    }
  };

  onLogout = () => {
    logout();
  };
  render() {
    const { loginLoading } = this.state;
    return (
      <Login
        loginLoading={loginLoading}
        onLogin={this.onLogin}
        onLogout={this.onLogout}
      />
    );
  }
}

export default withRouter(Index);
