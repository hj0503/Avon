import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import PerfomanceTable from "src/components/Table/PerformanceTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";

export default class Results extends PureComponent {
  onDelete = () => {
    showDeleteConfirm();
  };

  render() {
    return (
      <MainLayout>
        <PerfomanceTable
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
        amount: "string"
      },
      {
        name: "string",
        position: "string",
        type: "string",
        orderNumber: "string",
        orderName: "string",
        time: "string",
        amount: "string"
      },
      {
        name: "string",
        position: "string",
        type: "string",
        orderNumber: "string",
        orderName: "string",
        time: "string",
        amount: "string"
      },
      {
        name: "string",
        position: "string",
        type: "string",
        orderNumber: "string",
        orderName: "string",
        time: "string",
        amount: "string"
      }
    ];
  };
}
