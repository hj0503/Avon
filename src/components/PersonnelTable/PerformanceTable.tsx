import React, { PureComponent } from "react";
import { Table } from "antd";

type PersonnelData = {
  key?: number;
  personnelName: string;
  position: string;
  transType: string;
  transSerno: string;
  name: string;
  createDate: string;
  cnAmt: string;
};

interface Props {
  dataSource: PersonnelData[];
  onDelete: () => void;
}

export default class PerfomanceTable extends PureComponent<Props> {
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
        dataIndex: "personnelName",
        key: "personnelName"
      },
      {
        title: "职位",
        dataIndex: "position",
        key: "position"
      },
      {
        title: "业绩类型",
        dataIndex: "transType",
        key: "transType"
      },
      {
        title: "单号",
        key: "transSerno",
        dataIndex: "transSerno"
      },
      {
        title: "名称",
        key: "name",
        dataIndex: "name"
      },
      {
        title: "时间",
        key: "createDate",
        dataIndex: "createDate"
      },
      {
        title: "业绩金额",
        key: "cnAmt",
        dataIndex: "cnAmt"
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
