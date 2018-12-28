import React, { PureComponent } from "react";
import { Modal, Button } from "antd";

interface Props {
  visible: boolean;
  title: string;
  onOk: () => void;
  oncancel: () => void;
  footer?: any[]
}

export default class SubmitModal extends PureComponent<Props> {
  render() {
    const { visible, title, onOk, oncancel, footer } = this.props;
    return (
      <Modal
        visible={visible}
        title={title}
        onOk={onOk}
        onCancel={oncancel}
        footer={footer ? footer : this.defaultFooter}
      >
        {this.props.children}
      </Modal>
    );
  }

  private defaultFooter = () => {
    const { cancelText, okText } = this.props
    return [
      <>
        <Button key="back" onClick={this.handleCancel}>
          {cancelText}
        </Button>
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={this.handleOk}
        >
          {okText}
        </Button>
      </>
    ];
  };
}
