import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import CommissionTable from "src/components/Table/CommissionTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";

export default class Commision extends PureComponent {
  onDelete = () => {
    showDeleteConfirm();
  };

  render() {
    return (
      <MainLayout>
        <CommissionTable
          dataSource={this.datasource()}
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
        type: "string",
        orderNumber: "string",
        orderName: "string",
        time: "string",
        amount: "string",
        total: "string"
      },
      {
        name: "string",
        position: "string",
        type: "string",
        orderNumber: "string",
        orderName: "string",
        time: "string",
        amount: "string",
        total: "string"
      },
      {
        name: "string",
        position: "string",
        type: "string",
        orderNumber: "string",
        orderName: "string",
        time: "string",
        amount: "string",
        total: "string"
      },
      {
        name: "string",
        position: "string",
        type: "string",
        orderNumber: "string",
        orderName: "string",
        time: "string",
        amount: "string",
        total: "string"
      },
    ];
  };
}
