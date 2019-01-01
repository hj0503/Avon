import React, { PureComponent } from "react";
import { Modal, Button } from "antd";

interface Props {
  title: string;
  content: any;
  onOk: () => void;
  onCancel: () => void;
  footer?: any[];
  cancelText?: string;
  okText?: string;
}

export default class SubmitModal extends PureComponent<Props> {
  defaultProps = {
    cancelText: "取消",
    okText: "确认"
  };
  readonly state = {
    visible: false,
    loading: false
  };
  render() {
    const { title, onOk, onCancel, footer } = this.props;
    const { visible } = this.state;
    return (
      <Modal
        visible={visible}
        title={title}
        onOk={onOk}
        onCancel={onCancel}
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
    const { onCancel } = this.props
    this.setState({
      visible: false
    })
    onCancel()
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
