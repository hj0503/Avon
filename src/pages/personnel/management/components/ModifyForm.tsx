import React, { PureComponent } from "react";
import { Form, Input } from "antd";
import { WrappedFormUtils } from "antd/lib/form/Form";

const FormItem = Form.Item;

interface Props {
  form: WrappedFormUtils;
}

class ModifyForm extends PureComponent<Props> {
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
        <FormItem {...formItemLayout} label="姓名">
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "请输入员工姓名" }]
          })(<Input name="name" type="text" placeholder="请输入员工姓名" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="职位">
          {getFieldDecorator("position", {
            rules: [{ required: true, message: "请输入员工职位" }]
          })(
            <Input name="position" type="text" placeholder="请输入员工职位" />
          )}
        </FormItem>
        <Form.Item {...formItemLayout} label="电话号码">
          {getFieldDecorator("phone", {
            rules: [{ required: true, message: "请输入员工电话号码" }]
          })(
            <Input name="phone" type="tel" placeholder="请输入员工电话号码" />
          )}
        </Form.Item>
        <FormItem {...formItemLayout} label="基本工资">
          {getFieldDecorator("basicWage", {
            rules: [{ required: true, message: "请输入员工基本工资" }]
          })(
            <Input
              name="basicWage"
              type="text"
              placeholder="请输入员工基本工资"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="状态">
          {getFieldDecorator("status", {
            rules: [{ required: true, message: "请输入员工状态" }]
          })(<Input name="status" type="text" placeholder="请输入员工状态" />)}
        </FormItem>
      </Form>
    );
  }
}

export default Form.create({})(ModifyForm);
