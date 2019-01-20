import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import CommissionTable from "src/components/Table/CommissionTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";
import { commisionList } from "src/api/personnel";
import ContainerSpin from "src/components/Spin/ContainerSpin";
import { mapCommissionData } from './services';

export default class Commision extends PureComponent {
  readonly state = {
    dataSource: [],
    loading: false
  };

  componentDidMount() {
    this.fetchCommissionList();
  }
  onDelete = () => {
    showDeleteConfirm();
  };

  fetchCommissionList = () => {
    const params = {
      page: 1,
      size: 10
    };
    this.setState({
      loading: true
    });
    commisionList(params)
      .then(res => {
        this.setState({
          loading: false,
          dataSource: mapCommissionData(res.records)
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  };

  render() {
    const { loading, dataSource } = this.state
    return (
      <MainLayout>
        <ContainerSpin loading={loading}>
          <CommissionTable
            dataSource={dataSource}
            onDelete={this.onDelete}
          />
        </ContainerSpin>
      </MainLayout>
    );
  }
}
