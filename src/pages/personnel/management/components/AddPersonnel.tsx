import React, { PureComponent, createRef } from "react";
import SubmitModal from "src/components/Modal/SubmitModal";
import { Button } from "antd";
import AddForm from "./AddForm";
import { addPersonnel } from "src/api/personnel";

export default class AddPersonnel extends PureComponent {
  readonly state = {
    confirmLoading: false,
    visible: false
  };
  private modalForm = createRef<any>();
  onOk = () => {
    this.modalForm.current.validateFields((err, values) => {
      if (!err) {
        const { name, jobNumber, phone, position, status, basicWage } = values;
        const params = {
          name,
          jobNumber,
          phone,
          position,
          status,
          basicWage
        };
        this.onAddPersonnel(params);
      }
    });
  };
  onAddPersonnel = params => {
    this.setState({
      confirmLoading: true
    });
    addPersonnel(params)
      .then(res => {
        this.setState({
          confirmLoading: false,
          visible: false
        });
      })
      .catch(() => {
        this.setState({
          confirmLoading: false,
          visible: false
        });
      });
  };
  onOpen = () => {
    this.setState({
      visible: true
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    const { confirmLoading, visible } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.onOpen}>
          添加
        </Button>
        {visible && (
          <SubmitModal
            title="添加员工信息"
            onClose={this.onClose}
            onOk={this.onOk}
            confirmLoading={confirmLoading}
          >
            <AddForm ref={this.modalForm} />
          </SubmitModal>
        )}
      </div>
    );
  }
}
