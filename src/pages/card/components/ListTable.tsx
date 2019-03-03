import React, { PureComponent } from "react";
import { Table, Divider } from "antd";

type ListData = {
  key?: number;
  id: string;
  cardNumber: string;
  cardName: string;
  amt: string;
  total: number;
  effectiveDate: string;
};

interface Props {
  dataSource: ListData[];
  onOpen: (record: any) => void;
  onDelete: (record: any) => void;
}

export default class ListTable extends PureComponent<Props> {
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
        title: "编号",
        dataIndex: "cardNumber",
        key: "cardNumber"
      },
      {
        title: "卡项名称",
        dataIndex: "cardName",
        key: "cardName"
      },
      {
        title: "金额",
        dataIndex: "amt",
        key: "amt"
      },
      {
        title: "次数",
        key: "total",
        dataIndex: "total"
      },
      {
        title: "有效时间",
        key: "effectiveDate",
        dataIndex: "effectiveDate"
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
