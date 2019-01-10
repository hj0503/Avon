import React, { PureComponent } from "react";
import { Layout } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./index.less";

const { Content } = Layout;

import HeaderLayout from "./HeaderLayout";
import SiderLayout from "./SiderLayout";
import { findSelectMenu } from "src/utils/common";
import { MENU_LIST } from "src/data/menu";

interface Props extends RouteComponentProps {}
class MainLayout extends PureComponent<Props> {
  readonly state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { location } = this.props;
    const [key, subKey] = findSelectMenu(MENU_LIST, location.pathname);
    if (!key && !subKey) {
      return false;
    }
    return (
      <Layout className="mainLayout">
        <SiderLayout
          collapsed={this.state.collapsed}
          defaultSelectedKeys={key}
          defaultOpenKeys={subKey}
        />
        <Layout>
          <HeaderLayout collapsed={this.state.collapsed} toggle={this.toggle} />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: "auto"
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(MainLayout);
