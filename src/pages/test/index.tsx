import React, { Component } from 'react'
import Test1 from './Test1';
import Test2 from './Test2';

export default class index extends Component {
  readonly state = {
    test: 0
  }
  changeMe = () => {
    this.setState({
      test: ++this.state.test
    })
  }
  componentDidUpdate() {
    console.log('update test')
  }
  render() {
    console.log('render test')
    return (
      <div>
        <button onClick={this.changeMe}>click me! {this.state.test}</button>
        <Test1 />
        <Test2 />
      </div>
    )
  }
}
