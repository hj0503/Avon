import React, { PureComponent } from 'react'
import Login from './Login';
import { withRouter, RouteComponentProps } from 'react-router'
import { testFetch } from 'src/api/test';

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
    const { loginLoading } = this.state
    return (
      <Login loginLoading={ loginLoading } onLogin={ this.onLogin } />
    )
  }
}

export default withRouter(Index)
