import React, { PureComponent } from 'react'
import MainLayout from 'src/layouts/MainLayout';
import ContainerSpin from 'src/components/Spin/ContainerSpin';
import TrandsHoldTable from '../components/TrandsHoldTable';
import { cardTrandsHold, deleteTrandsHold } from 'src/api/card';
import { mapTrandsHoldData } from '../services';
import { showDeleteConfirm } from 'src/components/Modal/Confirm';

export default class Sold extends PureComponent {
  readonly state = {
    dataSource: [],
    loading: false,
    visible: false,
    selectId: ""
  };
  componentDidMount() {
    this.fetchTrandsHoldList();
  }
  fetchTrandsHoldList = (nameOrJobNumber = "", position = "") => {
    const params = {
      page: 1,
      size: 10,
      nameOrJobNumber,
      position
    };
    this.setState({
      loading: true
    });
    cardTrandsHold(params)
      .then(res => {
        this.setState({
          loading: false,
          dataSource: mapTrandsHoldData(res.records)
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  };
  deletePersonnel = async id => {
    console.log('id', id)
    await deleteTrandsHold(id);
    await this.fetchTrandsHoldList();
  };
  onDelete = record => {
    showDeleteConfirm(() => this.deletePersonnel(record.id));
  };
  render() {
    const { loading, dataSource } = this.state;
    return (
      <MainLayout>
        <ContainerSpin loading={loading}>
          <TrandsHoldTable
            dataSource={dataSource}
            onOpen={() => console.log('open')}
            onDelete={this.onDelete}
          />
        </ContainerSpin>
      </MainLayout>
    )
  }
}
