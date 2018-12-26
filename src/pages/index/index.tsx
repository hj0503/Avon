import React, { PureComponent } from 'react'
import MainLayout from 'src/layouts/MainLayout';
import { MENU_LIST } from 'src/data/menu';
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {}

class Index extends PureComponent<Props> {
  render() {
    const { location } = this.props
    const menu = MENU_LIST.find(menu => menu.path ===location.pathname)
    if(!menu) {
      return false
    }
    return (
      <MainLayout selectedKey={ menu.key }>
        <div>Index</div>
      </MainLayout>
    )
  }
}

export default withRouter(Index)
