
import Home from './Home';
import { Provider } from 'react-redux';
import React, {Component} from 'react';

import configureStore from './store';

export default class App extends Component {
   
    render() {
    const store = configureStore()
      return (
        <Provider store={store}>
          <Home />
        </Provider>
      );
    }
}

// const store = configureStore()

// const RNRedux = () => (
//   <Provider store = { store }>
//     <App />
//   </Provider>
// )

// AppRegistry.registerComponent(appName, () => RNRedux);