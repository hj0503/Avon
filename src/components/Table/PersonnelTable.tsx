import React, { PureComponent } from "react";
import { Table, Divider } from "antd";

type PersonnelData = {
  key?: number;
  name: string;
  position: string;
  phone: string;
  wage: number;
  status: string;
  addTime: string;
  entryTime: string;
  jobNumber: string;
};

interface Props {
  dataSource: PersonnelData[];
  onModify: () => void;
  onDelete: () => void;
}

export default class PersonnelTable extends PureComponent<Props> {
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
        title: "电话",
        dataIndex: "phone",
        key: "phone"
      },
      {
        title: "基本工资",
        key: "wage",
        dataIndex: "wage"
      },
      {
        title: "状态",
        key: "status",
        dataIndex: "status"
      },
      {
        title: "添加时间",
        key: "addTime",
        dataIndex: "addTime"
      },
      {
        title: "入职时间",
        key: "entryTime",
        dataIndex: "entryTime"
      },
      {
        title: "工号",
        key: "jobNumber",
        dataIndex: "jobNumber"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="javascript:;" onClick={this.props.onModify}>修改</a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.props.onDelete}>删除</a>
          </span>
        )
      }
    ];
  }
}
