import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import PersonnelTable from "src/components/Table/PersonnelTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";
import { personnel } from "src/api/personnel";
import ContainerSpin from "src/components/Spin/ContainerSpin";

export default class Management extends PureComponent {
  readonly state = {
    data: null,
    loading: false
  };
  componentDidMount() {
    const params = {
      nameOrJobNumber: "",
      position: "",
      page: 1,
      size: 10
    };
    this.setState({
      loading: true
    })
    personnel(params).then(res => {
      console.log('dddddddddd', res.data)
      this.setState({
        loading: false,
        data: res.data
      })
    }).catch(err => {
      this.setState({
        loading: false
      })
    })
  }

  onModify = () => {
    console.log("modify");
  };

  onDelete = () => {
    showDeleteConfirm();
  };

  render() {
    const { loading } = this.state
    return (
      <MainLayout>
        <ContainerSpin loading={loading}>
          <PersonnelTable
            dataSource={this.datasource()}
            onModify={this.onModify}
            onDelete={this.onDelete}
          />
        </ContainerSpin>
      </MainLayout>
    );
  }
  private datasource = () => {
    return [
      {
        name: "string",
        position: "string",
        phone: "string",
        basicWage: "10000",
        status: "string",
        addTime: "string",
        entryTime: "string",
        jobNumber: "string"
      },
      {
        name: "string",
        position: "string",
        phone: "string",
        basicWage: "10000",
        status: "string",
        addTime: "string",
        entryTime: "string",
        jobNumber: "string"
      },
      {
        name: "string",
        position: "string",
        phone: "string",
        basicWage: "10000",
        status: "string",
        addTime: "string",
        entryTime: "string",
        jobNumber: "string"
      },
      {
        name: "string",
        position: "string",
        phone: "string",
        basicWage: "10000",
        status: "string",
        addTime: "string",
        entryTime: "string",
        jobNumber: "string"
      }
    ];
  };
}
