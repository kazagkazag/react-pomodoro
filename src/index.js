import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App
      workMax={25}
      breakMax={10}
  />,
  document.getElementById('root')
);
