import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import { MENU_LIST } from "src/data/menu";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { findSelectMenu } from "src/utils/common";
import PersonnelTable from "src/components/Table/PersonnelTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";

interface Props extends RouteComponentProps {}

class Management extends PureComponent<Props> {
  onModify = () => {
    console.log("modify");
  };

  onDelete = () => {
    showDeleteConfirm();
  };

  render() {
    const { location } = this.props;
    const [key, subKey] = findSelectMenu(MENU_LIST, location.pathname);
    if (!key && !subKey) {
      return false;
    }

    return (
      <MainLayout defaultSelectedKeys={key} defaultOpenKeys={subKey}>
        <PersonnelTable
          dataSource={this.datasource()}
          onModify={this.onModify}
          onDelete={this.onDelete}
        />
      </MainLayout>
    );
  }
  private datasource = () => {
    return [
      {
        name: "string",
        position: "string",
        phone: "string",
        wage: 10000,
        status: "string",
        addTime: "string",
        entryTime: "string",
        jobNumber: "string"
      },
      {
        name: "string",
        position: "string",
        phone: "string",
        wage: 10000,
        status: "string",
        addTime: "string",
        entryTime: "string",
        jobNumber: "string"
      },
      {
        name: "string",
        position: "string",
        phone: "string",
        wage: 10000,
        status: "string",
        addTime: "string",
        entryTime: "string",
        jobNumber: "string"
      },
      {
        name: "string",
        position: "string",
        phone: "string",
        wage: 10000,
        status: "string",
        addTime: "string",
        entryTime: "string",
        jobNumber: "string"
      }
    ];
  }
}

export default withRouter(Management);
