import React, { PureComponent } from 'react'
import Login from './Login';
import { withRouter, RouteComponentProps } from 'react-router'
import { logout, from } from 'src/api/userInfo';
import md5 from 'js-md5'

interface IndexProps extends RouteComponentProps {
  history: any
}

class Index extends PureComponent<IndexProps> {
  readonly state = {
    loginLoading: false
  }
  onLogin = (username, password) => {
    this.setState({ loginLoading: true })
    const params = {
      username,
      password: md5(password)
    }
    from(params)
    // setTimeout(() => this.props.history.push('/index'), 2000)
  }

  onLogout = () => {
    logout()
  }
  render() {
    const { loginLoading } = this.state
    return (
      <Login loginLoading={ loginLoading } onLogin={ this.onLogin } onLogout={ this.onLogout } />
    )
  }
}

export default withRouter(Index)
