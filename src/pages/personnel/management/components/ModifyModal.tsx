import React, { PureComponent, createRef } from "react";
import SubmitModal from "src/components/Modal/SubmitModal";
import ModifyForm from "./ModifyForm";

interface Props {
  onClose: () => void;
  onOk: () => void;
}

export default class ModifyModal extends PureComponent<Props> {
  private modalForm = createRef<any>()
  onOk =() => {
    this.modalForm.current.validateFields((err, values) => {
      if(!err) {
        this.props.onOk()
      }
    })
  }
  render() {
    const { onClose } = this.props;
    return (
      <SubmitModal title="修改员工信息" onClose={onClose} onOk={this.onOk}>
        <ModifyForm ref={this.modalForm}/>
      </SubmitModal>
    );
  }
}
