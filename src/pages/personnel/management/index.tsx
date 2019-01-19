import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import PersonnelTable from "src/pages/personnel/management/components/PersonnelTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";
import { personnel, deletePersonnel } from "src/api/personnel";
import ContainerSpin from "src/components/Spin/ContainerSpin";
import ModifyModal from "./components/ModifyModal";
import { mapPersonnelData } from "./services";

export default class Management extends PureComponent {
  readonly state = {
    dataSource: [],
    loading: false,
    visible: false,
    selectId: ""
  };
  componentDidMount() {
    this.fetchPersonnelList();
  }

  fetchPersonnelList = () => {
    const params = {
      nameOrJobNumber: "",
      position: "",
      page: 1,
      size: 10
    };
    this.setState({
      loading: true
    });
    personnel(params)
      .then(res => {
        this.setState({
          loading: false,
          dataSource: mapPersonnelData(res.data)
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  };
  

  deletePersonnel = async id => {
    const params = {
      id
    };
    await deletePersonnel(params);
    await this.fetchPersonnelList();
  };

  onModifyOk = () => {
    this.onClose();
    this.fetchPersonnelList();
  };

  onOpenModify = record => {
    this.setState({
      visible: true,
      selectId: record.id
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onDelete = record => {
    showDeleteConfirm(() => this.deletePersonnel(record.id));
  };

  render() {
    const { loading, dataSource, visible, selectId } = this.state;
    return (
      <MainLayout>
        <ContainerSpin loading={loading}>
          <PersonnelTable
            dataSource={dataSource}
            onOpen={this.onOpenModify}
            onDelete={this.onDelete}
          />
          {visible && (
            <ModifyModal
              onClose={this.onClose}
              onOk={this.onModifyOk}
              selectId={selectId}
            />
          )}
        </ContainerSpin>
      </MainLayout>
    );
  }
}
