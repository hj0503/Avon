import React, { PureComponent, createRef } from "react";
import SubmitModal from "src/components/Modal/SubmitModal";
import ModifyForm from "./ModifyForm";
import { modifyPersonnel } from "src/api/personnel";

interface Props {
  onClose: () => void;
  onOk: () => void;
  selectId: string;
}

export default class ModifyModal extends PureComponent<Props> {
  readonly state = {
    confirmLoading: false
  };
  private modalForm = createRef<any>();
  onOk = () => {
    const { selectId } = this.props;
    this.modalForm.current.validateFields((err, values) => {
      if (!err) {
        const { name, phone, position, status, basicWage } = values;
        const params = {
          id: selectId,
          name,
          phone,
          position,
          status,
          basicWage
        };
        this.onModifyPersonnel(params);
      }
    });
  };
  onModifyPersonnel = params => {
    this.setState({
      confirmLoading: true
    });
    modifyPersonnel(params)
      .then(res => {
        this.setState({
          confirmLoading: false
        });
        this.props.onOk();
      })
      .catch(() => {
        this.setState({
          confirmLoading: false
        });
      });
  };
  render() {
    const { onClose } = this.props;
    const { confirmLoading } = this.state;
    return (
      <SubmitModal
        title="修改员工信息"
        onClose={onClose}
        onOk={this.onOk}
        confirmLoading={confirmLoading}
      >
        <ModifyForm ref={this.modalForm} />
      </SubmitModal>
    );
  }
}
