import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './screens/App';
import PersonInfo from './screens/App/screens/PersonInfo';

export default(
  <Route path="/" component={ App }>
    <Route path="person/:id" component={ PersonInfo }/>
    <Redirect from="person(/:id)" to="/" />
  </Route>
);
