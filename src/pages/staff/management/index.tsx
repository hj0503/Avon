import React, { PureComponent } from 'react'
import MainLayout from 'src/layouts/MainLayout';
import { MENU_LIST } from 'src/data/menu';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { findSelectMenu } from 'src/utils/common';

interface Props extends RouteComponentProps {}

class Management extends PureComponent<Props> {
  render() {
    const { location } = this.props
    const [key, subKey] = findSelectMenu(MENU_LIST, location.pathname)
    if(!key && !subKey) {
      return false
    }
    return (
      <MainLayout defaultSelectedKeys={ key } defaultOpenKeys={subKey}>
        <div>Management</div>
      </MainLayout>
    )
  }
}

export default withRouter(Management)
