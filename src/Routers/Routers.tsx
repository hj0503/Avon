import * as React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routers from './RouterConfig'
import '../index.less'

import store from '../store'

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            {
              Routers.map(route => (
                <Route 
                  key={ route.path } 
                  exact={ true } 
                  path={ route.path } 
                  component={ route.component } />
              ))
            }
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
