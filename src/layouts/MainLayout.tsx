import React, { PureComponent } from "react";
import { Layout } from "antd";
import "./index.less";

const { Content } = Layout;

import HeaderLayout from './HeaderLayout';
import SiderLayout from './SiderLayout';

export default class MainLayout extends PureComponent {
  readonly state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Layout className="mainLayout">
        <SiderLayout collapsed={ this.state.collapsed }/>
        <Layout>
          <HeaderLayout collapsed={this.state.collapsed} toggle={this.toggle}/>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
