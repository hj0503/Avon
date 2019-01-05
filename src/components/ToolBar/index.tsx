import React, { PureComponent } from "react";
import { Menu, Dropdown, Icon } from "antd";
import "./index.less";
import { logoutUser } from "src/reducers/authReducer";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {
  history;
  logout;
}
class ToolBar extends PureComponent<Props> {
  render() {
    const userName = localStorage.getItem("userName");
    return (
      <div className="toolBar">
        <Dropdown overlay={this.renderMenu()}>
          <a className="ant-dropdown-link" href="#">
            {userName} <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    );
  }

  private logout = () => {
    this.props.logout().then(() => {
      this.props.history.push("/login");
    });
  };

  private renderMenu = () => {
    return (
      <Menu>
        <Menu.Item>
          <div onClick={this.logout}>退出登录</div>
        </Menu.Item>
      </Menu>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return {
    async logout() {
      await dispatch(logoutUser());
    }
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ToolBar)
);
