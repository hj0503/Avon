import React, { PureComponent } from "react";
import { Layout, Menu, Icon, Row, Col } from "antd";
import { Link } from "react-router-dom";
import ToolBar from "../components/ToolBar";
import "./index.less";

import { MENU_LIST } from "../data/menu";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

export default class MainLayout extends PureComponent {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout className="mainLayout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[MENU_LIST[0].key]}
          >
            {MENU_LIST.map(menu =>
              menu.subMenu ? (
                <SubMenu
                  key={menu.key}
                  title={
                    <span>
                      <Icon type={menu.icon} />
                      <span>{menu.label}</span>
                    </span>
                  }
                >
                  {menu.subMenu.map(sub =>
                    sub.subMenu ? (
                      <SubMenu
                        key={sub.key}
                        title={
                          <span>
                            <Icon type={sub.icon} />
                            <span>{sub.label}</span>
                          </span>
                        }
                      >
                        {sub.subMenu.map(sub => (
                          <Menu.Item key={sub.key}>
                            <Link to={menu.path}>
                              <Icon type={sub.icon} />
                              <span>{sub.label}</span>
                            </Link>
                          </Menu.Item>
                        ))}
                      </SubMenu>
                    ) : (
                      <Menu.Item key={sub.key}>
                        <Link to={menu.path}>
                          <Icon type={sub.icon} />
                          <span>{sub.label}</span>
                        </Link>
                      </Menu.Item>
                    )
                  )}
                </SubMenu>
              ) : (
                <Menu.Item key={menu.key}>
                  <Link to={menu.path}>
                    <Icon type={menu.icon} />
                    <span>{menu.label}</span>
                  </Link>
                </Menu.Item>
              )
            )}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: "0 24px 0 0" }}>
            <Row>
              <Col span={12}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
              </Col>
              <Col span={12}>
                <ToolBar />
              </Col>
            </Row>
          </Header>
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
