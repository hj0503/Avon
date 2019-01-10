import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import PersonnelTable from "src/components/Table/PersonnelTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";

export default class Management extends PureComponent {
  onModify = () => {
    console.log("modify");
  };

  onDelete = () => {
    showDeleteConfirm();
  };

  render() {
    return (
      <MainLayout>
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
