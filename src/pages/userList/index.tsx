import React, { PureComponent } from 'react'
import UserList from './UserList';
import MainLayout from 'src/layouts/MainLayout';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { MENU_LIST } from 'src/data/menu';
import { findSelectMenu } from 'src/utils/common';

interface Props extends RouteComponentProps {}

class index extends PureComponent<Props> {
  render() {
    const { location } = this.props
    const [key, subKey] = findSelectMenu(MENU_LIST, location.pathname)
    if(!key && !subKey) {
      return false
    }
    return (
      <MainLayout defaultSelectedKeys={ key } defaultOpenKeys={subKey}>
        <UserList />
      </MainLayout>
    )
  }
}

export default withRouter(index)
