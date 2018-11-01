import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import './App.css';
import routes from '../routes/index';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  );
};

export default App;
