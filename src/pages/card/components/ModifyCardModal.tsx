import React, { PureComponent, createRef } from "react";
import SubmitModal from "src/components/Modal/SubmitModal";
import ModifyCardForm from "./ModifyCardForm";
import { modifyCard } from 'src/api/card';

interface Props {
  onClose: () => void;
  onOk: () => void;
  selectId: string;
}

export default class ModifyCardModal extends PureComponent<Props> {
  readonly state = {
    confirmLoading: false
  };
  private modalForm = createRef<any>();
  onOk = () => {
    const { selectId } = this.props;
    this.modalForm.current.validateFields((err, values) => {
      if (!err) {
        const { cardNumber, cardName, amt, total, effectiveDate } = values;
        const params = {
          id: selectId,
          cardNumber,
          cardName,
          amt,
          total,
          effectiveDate
        };
        this.onModifyCard(params);
      }
    });
  };
  onModifyCard = params => {
    this.setState({
      confirmLoading: true
    });
    modifyCard(params)
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
        title="修改卡项"
        onClose={onClose}
        onOk={this.onOk}
        confirmLoading={confirmLoading}
      >
        <ModifyCardForm ref={this.modalForm} />
      </SubmitModal>
    );
  }
}
