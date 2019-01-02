import React, { PureComponent } from 'react'

export default class Test2 extends PureComponent {
  componentDidUpdate() {
    console.log('update test2')
  }
  render() {
    console.log('render test2')
    return (
      <div>
        test2
      </div>
    )
  }
}
