import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

import App from './components/App';
import rootReducer from './reducers/reducer';
import { getAllData } from './actions/action';

const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
  ),
)

store.dispatch(getAllData());

const providerDOM = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history={history} />
    </ConnectedRouter> 
  </Provider>
);
render(
  providerDOM,
  document.getElementById('root'),
);

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./components/App', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers/reducer', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
