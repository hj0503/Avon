import React, { PureComponent } from "react";
import ToolBar from "../components/ToolBar";
import { Layout, Icon, Row, Col } from "antd";
const { Header } = Layout;

interface Props {
  collapsed: boolean,
  toggle: () => void
}
export default class HeaderLayout extends PureComponent<Props> {
  render() {
    const { collapsed, toggle } = this.props
    return (
      <Header style={{ background: "#fff", padding: "0 24px 0 0" }}>
        <Row>
          <Col span={12}>
            <Icon
              className="trigger"
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={toggle}
            />
          </Col>
          <Col span={12}>
            <ToolBar />
          </Col>
        </Row>
      </Header>
    );
  }
}
