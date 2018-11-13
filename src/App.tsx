import * as React from 'react';
import { Provider } from 'react-redux'
import './index.less'

import store from './store'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="test">
          testtest
        </div>
      </Provider>
    );
  }
}

export default App;
