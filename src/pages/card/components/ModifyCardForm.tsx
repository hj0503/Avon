import React, { PureComponent } from "react";
import { Form, Input } from "antd";
import { WrappedFormUtils } from "antd/lib/form/Form";

const FormItem = Form.Item;

//需要封装table组件

interface Props {
  form: WrappedFormUtils;
}

class ModifyCardForm extends PureComponent<Props> { 
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 28 },
        sm: { span: 4 }
      }, 
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };
    const {
      form: { getFieldDecorator }
    } = this.props;
    return (
      <Form>
        <FormItem {...formItemLayout} label="卡项编号">
          {getFieldDecorator("cardNumber", {
            rules: [{ required: true, message: "请输入卡项编号" }]
          })(<Input name="cardNumber" type="text" placeholder="请输入卡项编号" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="卡项名称">
          {getFieldDecorator("cardName", {
            rules: [{ required: true, message: "请输入卡项名称" }]
          })(
            <Input name="cardName" type="text" placeholder="请输入卡项名称" />
          )}
        </FormItem>
        <Form.Item {...formItemLayout} label="金额">
          {getFieldDecorator("amt", {
            rules: [{ required: true, message: "请输入金额" }]
          })(
            <Input name="amt" type="text" placeholder="请输入金额" />
          )}
        </Form.Item>
        <FormItem {...formItemLayout} label="次数">
          {getFieldDecorator("total", {
            rules: [{ required: true, message: "请输入次数" }]
          })(
            <Input
              name="total"
              type="text"
              placeholder="请输入次数"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="有效时间">
          {getFieldDecorator("effectiveDate", {
            rules: [{ required: true, message: "请输入有效时间(多少天)" }]
          })(<Input name="effectiveDate" type="text" placeholder="请输入有效时间" />)}
        </FormItem>
      </Form>
    );
  } 
}

export default Form.create({})(ModifyCardForm);
