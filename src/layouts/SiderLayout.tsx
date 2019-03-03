import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

import { MENU_LIST } from "../data/menu";
import { connect } from "react-redux";
import { fetchSysMenu } from 'src/reducers/authReducer';

interface Props {
  collapsed: boolean;
  defaultSelectedKeys: string;
  defaultOpenKeys: string;
  getMenu: () => void;
}
interface State {
  openKeys: string[];
}

class SiderLayout extends PureComponent<Props, State> {
  private rootSubmenuKeys = MENU_LIST.map(menu => menu.key);
  readonly state = {
    openKeys: [""]
  };
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  componentDidMount() {
    this.props.getMenu()
  }
  render() {
    const { collapsed, defaultSelectedKeys, defaultOpenKeys } = this.props;
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[defaultSelectedKeys]}
          defaultOpenKeys={[defaultOpenKeys]}
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
                      {sub.subMenu.map(subSub => (
                        <Menu.Item key={subSub.key}>
                          <Link to={subSub.path}>
                            <Icon type={subSub.icon} />
                            <span>{subSub.label}</span>
                          </Link>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Menu.Item key={sub.key}>
                      <Link to={sub.path}>
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
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMenu() {
      dispatch(fetchSysMenu());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SiderLayout);
