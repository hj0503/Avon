import React, { PureComponent } from 'react'
import UserList from './UserList';
import MainLayout from 'src/layouts/MainLayout';

export default class index extends PureComponent {
  render() {
    return (
      <MainLayout>
        <UserList />
      </MainLayout>
    )
  }
}
