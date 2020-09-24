import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import {HashRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
