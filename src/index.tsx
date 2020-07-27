import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import LeftPanel from "./LeftPanel";
import WorkSpace from "./WorkSpace";

ReactDOM.render(
  <React.StrictMode>
    <LeftPanel />
    <WorkSpace />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
