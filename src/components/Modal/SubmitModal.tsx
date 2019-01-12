import React, { PureComponent } from "react";
import { Modal, Button } from "antd";

interface Props {
  title: string;
  onOk: () => void;
  onClose: () => void;
  footer?;
  cancelText?: string;
  okText?: string;
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
    const { title, onOk, onClose, footer } = this.props;
    return (
      <Modal
        visible={true}
        title={title}
        onOk={onOk}
        onCancel={onClose}
        footer={footer ? footer : this.defaultFooter()}
      >
        {this.props.children}
      </Modal>
    );
  }

  private defaultFooter = () => {
    const { cancelText, okText, onClose, onOk } = this.props;
    const { loading } = this.state
    return [
      <div key="1">
        <Button key="back" onClick={onClose}>
          {cancelText}
        </Button>
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={onOk}
        >
          {okText}
        </Button>
      </div>
    ];
  };
}
