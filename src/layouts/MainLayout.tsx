import React, { PureComponent } from "react";
import { Layout, Menu, Icon } from "antd";
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
                            <Icon type={sub.icon} />
                            <span>{sub.label}</span>
                          </Menu.Item>
                        ))}
                      </SubMenu>
                    ) : (
                      <Menu.Item key={sub.key}>{sub.label}</Menu.Item>
                    )
                  )}
                </SubMenu>
              ) : (
                <Menu.Item key={menu.key}>
                  <Icon type={menu.icon} />
                  <span>{menu.label}</span>
                </Menu.Item>
              )
            )}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
