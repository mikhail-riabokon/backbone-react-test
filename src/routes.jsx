import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './screens/Home';
import App from './App';

export default(
  <Route path="/" component={ App }>
    <IndexRoute component={ Home }/>
  </Route>
);