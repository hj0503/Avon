import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import PersonnelTable from "src/pages/personnel/management/components/PersonnelTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";
import { personnel, deletePersonnel } from "src/api/personnel";
import ContainerSpin from "src/components/Spin/ContainerSpin";
import ModifyModal from "./components/ModifyModal";
import { mapPersonnelData } from "./services";
import AddPersonnel from "./components/AddPersonnel";
import Search from "antd/lib/input/Search";
import { Select } from 'antd';

const Option = Select.Option

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

  fetchPersonnelList = (nameOrJobNumber = "", position = "") => {
    const params = {
      page: 1,
      size: 10, 
      nameOrJobNumber,
      position
    };
    this.setState({
      loading: true
    });
    personnel(params)
      .then(res => {
        this.setState({
          loading: false,
          dataSource: mapPersonnelData(res.records)
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  };

  deletePersonnel = async id => {
    await deletePersonnel(id);
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

  onSearch = value => {
    this.fetchPersonnelList(value);
  };

  onSelectPosition = value => {
    this.fetchPersonnelList("", value)
  }

  render() {
    const { loading, dataSource, visible, selectId } = this.state;
    return (
      <MainLayout>
        <AddPersonnel />
        <Search
          placeholder="通过姓名或者工号搜索"
          onSearch={value => this.fetchPersonnelList(value)}
          style={{ width: 200 }}
        />
        <Select placeholder="通过职位搜索" onSelect={(value) => this.onSelectPosition(value)} style={{ width: 120 }}>
          <Option value="扫厕所">扫厕所</Option>
          <Option value="1">1</Option>
          <Option value="1002">1002</Option>
        </Select>
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
