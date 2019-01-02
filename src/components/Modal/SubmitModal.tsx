import React, { PureComponent } from "react";
import { Modal, Button } from "antd";

interface Props {
  title: string;
  content?: any;
  visible: boolean;
  onOk: () => void;
  footer?: any[];
  cancelText?: string;
  okText?: string;
}

export default class SubmitModal extends PureComponent<Props> {
  static defaultProps = {
    cancelText: "取消",
    okText: "确认"
  };
  readonly state = {
    loading: false
  };
  render() {
    const { title, onOk, footer, visible } = this.props;
    return (
      <Modal
        visible={visible}
        title={title}
        onOk={onOk}
        onCancel={this.onCancel}
        footer={footer ? footer : this.defaultFooter}
      >
        {this.props.children}
      </Modal>
    );
  }

  private onOk = () => {
    const { onOk } = this.props
    this.setState({
      visible: true
    })
    onOk()
  }

  private onCancel = () => {
    this.setState({
      visible: false
    })
  }

  private defaultFooter = () => {
    const { cancelText, okText } = this.props;
    const { loading } = this.state
    return [
      <>
        <Button key="back" onClick={this.onCancel}>
          {cancelText}
        </Button>
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={this.onOk}
        >
          {okText}
        </Button>
      </>
    ];
  };
}
