import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './Components/TodoApp';
import * as serviceWorker from './serviceWorker';

// const data = [{id:"1", tittle: "cobalist", nama:"udin"},{id:"2", tittle: "capek", nama:"rofi"}]

ReactDOM.render(<TodoApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
