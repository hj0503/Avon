import React, { PureComponent } from "react";
import { Table, Divider } from "antd";

type TrandsHoldData = {
  key?: number;
  cardNumber: string;
  cardName: string;
  personnelName: string;
  custName: string;
  phone: string;
  total: string;
  createDate: string;
  expiryDate: string;
  amt: string;
};

interface Props {
  dataSource: TrandsHoldData[];
  onOpen: (record: any) => void;
  onDelete: (record: any) => void;
}

export default class TrandsHoldTable extends PureComponent<Props> {
  render() {
    const { dataSource } = this.props;
    const data = dataSource.map((item, index) => {
      return { ...item, key: index}
    })
    return <Table columns={this.renderColumns()} dataSource={data} />;
  }

  private renderColumns = () => {
    return [
      {
        title: "卡号",
        dataIndex: "cardNumber",
        key: "cardNumber"
      },
      {
        title: "卡项名称",
        dataIndex: "cardName",
        key: "cardName"
      },
      {
        title: "员工姓名",
        dataIndex: "personnelName",
        key: "personnelName"
      },
      {
        title: "销售人",
        dataIndex: "custName",
        key: "custName"
      },
      {
        title: "手机",
        key: "phone",
        dataIndex: "phone"
      },
      {
        title: "剩余次数",
        key: "total",
        dataIndex: "total"
      },
      {
        title: "购买时间",
        key: "createDate",
        dataIndex: "createDate"
      },
      {
        title: "到期时间",
        key: "expiryDate",
        dataIndex: "expiryDate"
      },
      {
        title: "单价",
        key: "amt",
        dataIndex: "amt"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="javascript:;" onClick={() => this.props.onOpen(record)}>修改</a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={() => this.props.onDelete(record)}>删除</a>
          </span>
        )
      }
    ];
  }
}
