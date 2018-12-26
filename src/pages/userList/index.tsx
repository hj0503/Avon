import React, { PureComponent } from 'react'
import UserList from './UserList';
import MainLayout from 'src/layouts/MainLayout';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { MENU_LIST } from 'src/data/menu';

interface Props extends RouteComponentProps {}

class index extends PureComponent<Props> {
  render() {
    const { location } = this.props
    const menu = MENU_LIST.find(menu => menu.path ===location.pathname)
    if(!menu) {
      return false
    }
    return (
      <MainLayout selectedKey={"userList"}>
        <UserList />
      </MainLayout>
    )
  }
}

export default withRouter(index)
