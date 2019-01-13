import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import PersonnelTable from "src/pages/personnel/management/components/PersonnelTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";
import { personnel } from "src/api/personnel";
import ContainerSpin from "src/components/Spin/ContainerSpin";
import ModifyModal from "./components/ModifyModal";
import { mapPersonnelData } from './services';

export default class Management extends PureComponent {
  readonly state = {
    dataSource: [],
    loading: false,
    visible: false,
    selectId: ""
  };
  componentDidMount() {
    this.fetchPersonnelList()
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
  }

  onOk = () => {
    this.onClose();
  };

  onOpen = (record) => {
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

  onDelete = () => {
    showDeleteConfirm();
  };

  render() {
    const { loading, dataSource, visible, selectId } = this.state;
    return (
      <MainLayout>
        <ContainerSpin loading={loading}>
          <PersonnelTable
            dataSource={dataSource}
            onOpen={this.onOpen}
            onDelete={this.onDelete}
          />
          {visible && <ModifyModal onClose={this.onClose} onOk={this.onOk} selectId={selectId} />}
        </ContainerSpin>
      </MainLayout>
    );
  }
}
