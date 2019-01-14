import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Head from './Head';
import Foot from './Foot';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Head />, document.getElementById('head'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Foot />, document.getElementById('foot'));

if (module.hot) {
	module.hot.accept();
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
