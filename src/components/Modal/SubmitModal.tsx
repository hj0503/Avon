import React, { PureComponent } from "react";
import { Modal } from "antd";

interface Props {
  title: string;
  onOk: () => void;
  onClose: () => void;
  footer?;
  cancelText?: string;
  okText?: string;
  confirmLoading?: boolean;
}

export default class SubmitModal extends PureComponent<Props> {
  static defaultProps = {
    cancelText: "取消",
    okText: "确认",
    footer: null
  };
  readonly state = {
    loading: false
  };

  render() {
    const {
      title,
      onOk,
      onClose,
      confirmLoading,
      okText,
      cancelText
    } = this.props;
    return (
      <Modal
        visible={true}
        title={title}
        onOk={onOk} 
        okText={okText}
        onCancel={onClose}
        cancelText={cancelText}
        confirmLoading={confirmLoading}
      >
        {this.props.children}
      </Modal>
    );
  }
}
