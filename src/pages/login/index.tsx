import React, { PureComponent } from 'react'
import Login from './Login';
import { withRouter, RouteComponentProps } from 'react-router'
import { testFetch } from 'src/api/test';
import md5 from 'js-md5'

interface IndexProps extends RouteComponentProps {
  history: any
}

class Index extends PureComponent<IndexProps> {
  readonly state = {
    loginLoading: false
  }
  onLogin = () => {
    this.setState({ loginLoading: true })
    testFetch()
    setTimeout(() => this.props.history.push('/index'), 2000)
  }
  render() {
    console.log( md5('123456'))
    const { loginLoading } = this.state
    return (
      <Login loginLoading={ loginLoading } onLogin={ this.onLogin } />
    )
  }
}

export default withRouter(Index)
