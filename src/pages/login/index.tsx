import React, { PureComponent } from "react";
import Login from "./Login";
import { withRouter, RouteComponentProps } from "react-router";
import { logout } from "src/api/authentication";
import md5 from "js-md5";
import { fetchUserInfo } from "src/reducers/authReducer";
import { connect } from "react-redux";

interface Props extends RouteComponentProps {
  history;
  fetchUserInfo;
}

class Index extends PureComponent<Props> {
  readonly state = {
    loginLoading: false
  };
  onLogin = async (username, password) => {
    const { history } = this.props;
    this.setState({ loginLoading: true });
    const params = {
      username,
      password: md5(password)
    };
    this.props.fetchUserInfo(params).then(() => {
      this.setState({
        loginLoading: false
      });
      history.push("/index");
    });
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
  )(Index)
);
