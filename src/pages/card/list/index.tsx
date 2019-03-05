import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import { carditem, deleteCard } from "src/api/card";
import { mapCardData } from "../services";
import ContainerSpin from "src/components/Spin/ContainerSpin";
import ListTable from "../components/ListTable";
import { showDeleteConfirm } from 'src/components/Modal/Confirm';
import ModifyCardModal from '../components/ModifyCardModal';
import Search from 'antd/lib/input/Search';

export default class List extends PureComponent {
  readonly state = {
    dataSource: [],
    loading: false,
    visible: false,
    selectId: ""
  };
  componentDidMount() {
    this.fetchCardList();
  }
  fetchCardList = (cardNumberOrName = "") => {
    const params = { 
      page: 1,
      size: 10,
      cardNumberOrName,
    };
    this.setState({
      loading: true
    });
    carditem(params)
      .then(res => {
        this.setState({
          loading: false,
          dataSource: mapCardData(res.records)
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  };
  deletePersonnel = async id => { 
    await deleteCard(id);
    await this.fetchCardList();
  };
  onDelete = record => {
    showDeleteConfirm(() => this.deletePersonnel(record.id));
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };
  onModifyOk = () => {
    this.onClose();
    this.fetchCardList();
  };
  onOpenModify = record => {
    this.setState({
      visible: true,
      selectId: record.id
    });
  };
  render() {
    const { loading, dataSource, visible, selectId } = this.state;
    return (
      <MainLayout>
        <Search
          placeholder="通过编号或者卡号名称搜索"
          onSearch={value => this.fetchCardList(value)}
          style={{ width: 200 }}
        />
        <ContainerSpin loading={loading}>
          <ListTable
            dataSource={dataSource}
            onOpen={this.onOpenModify}
            onDelete={this.onDelete}
          />
          {visible && (
            <ModifyCardModal
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
