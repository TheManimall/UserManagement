import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import * as reduxDevtoolsExtension from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import mainReducer from './reducers/reducer';
import { getAllData } from './actions/action';
import UsersList from './containers/UserCont'

const store = createStore(
  mainReducer,
  reduxDevtoolsExtension.composeWithDevTools(applyMiddleware(thunk)),
);

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

store.dispatch(getAllData());

const providerDOM = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/users' component={UsersList} />
      </div>
    </Router>
  </Provider>
);
render(
  providerDOM,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
