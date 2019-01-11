import React, { PureComponent } from "react";
import { Spin } from "antd";

interface Props {
  loading: boolean;
  tip?: string;
}

export default class ContainerSpin extends PureComponent<Props> {
  static defaultProps = {
    tip: "加载中..."
  };
  render() {
    const { loading, tip } = this.props;
    return (
      <Spin spinning={loading} tip={tip} size={"large"}>
        {this.props.children}
      </Spin>
    );
  }
}
