import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import { MENU_LIST } from "src/data/menu";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { findSelectMenu } from "src/utils/common";
import PerfomanceTable from "src/components/Table/PerformanceTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";

interface Props extends RouteComponentProps {}

class Results extends PureComponent<Props> {
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

export default withRouter(Results);
