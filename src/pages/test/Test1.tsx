import React, { Component } from 'react'

export default class Test1 extends Component {
  componentDidUpdate() {
    console.log('update test1')
  }
  render() {
    console.log('render test1')
    return (
      <div>
        test1
      </div>
    )
  }
}
