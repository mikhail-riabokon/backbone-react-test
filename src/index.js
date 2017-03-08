import { browserHistory } from 'react-router';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';
import React from 'react';
import './collections/users';

ReactDOM.render(
  <Router routes={ routes } history={ browserHistory }/>,
  document.getElementById('root')
);
