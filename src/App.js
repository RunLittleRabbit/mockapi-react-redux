import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Switch, Route } from 'react-router-dom';
import { object } from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import Dashboard from './pages/Dashboard';

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  );
}

App.propTypes = {
  history: object.isRequired,
};

export default App;
