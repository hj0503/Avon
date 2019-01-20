import React, { PureComponent } from "react";
import MainLayout from "src/layouts/MainLayout";
import PerfomanceTable from "src/components/Table/PerformanceTable";
import { showDeleteConfirm } from "src/components/Modal/Confirm";
import { performanceList } from "src/api/personnel";
import ContainerSpin from "src/components/Spin/ContainerSpin";
import { mapPerformanceData } from './services';

export default class Results extends PureComponent {
  readonly state = {
    dataSource: [],
    loading: false
  };
  componentDidMount() {
    this.fetchPerformanceList();
  }
  fetchPerformanceList = () => {
    const params = {
      page: 1,
      size: 10
    };
    this.setState({
      loading: true
    });
    performanceList(params)
      .then(res => {
        this.setState({
          loading: false,
          dataSource: mapPerformanceData(res.records)
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  };
  onDelete = () => {
    showDeleteConfirm();
  };

  render() {
    const { loading, dataSource } = this.state;
    return (
      <MainLayout>
        <ContainerSpin loading={loading}>
          <PerfomanceTable
            dataSource={dataSource}
            onDelete={this.onDelete}
          />
        </ContainerSpin>
      </MainLayout>
    );
  }
}
