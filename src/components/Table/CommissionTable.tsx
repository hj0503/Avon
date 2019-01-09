import React, { PureComponent } from "react";
import { Table } from "antd";

type PersonnelData = {
  key?: number;
  name: string;
  position: string;
  type: string;
  orderNumber: string;
  orderName: string;
  time: string;
  amount: string;
  total: string;
};

interface Props {
  dataSource: PersonnelData[];
  onDelete: () => void;
}

export default class CommissionTable extends PureComponent<Props> {
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
        title: "姓名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "职位",
        dataIndex: "position",
        key: "position"
      },
      {
        title: "提成类型",
        dataIndex: "type",
        key: "type"
      },
      {
        title: "单号",
        key: "orderNumber",
        dataIndex: "orderNumber"
      },
      {
        title: "名称",
        key: "orderName",
        dataIndex: "orderName"
      },
      {
        title: "时间",
        key: "time",
        dataIndex: "time"
      },
      {
        title: "提成金额",
        key: "amount",
        dataIndex: "amount"
      },
      {
        title: "总提成",
        key: "total",
        dataIndex: "total"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="javascript:;" onClick={this.props.onDelete}>删除</a>
          </span>
        )
      }
    ];
  }
}
