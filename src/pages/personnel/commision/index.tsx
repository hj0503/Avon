import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import { MENU_LIST } from "src/data/menu";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { findSelectMenu } from "src/utils/common";
import CommissionTable from "src/components/Table/CommissionTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";

interface Props extends RouteComponentProps {}

class Commision extends PureComponent<Props> {
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

export default withRouter(Commision);
