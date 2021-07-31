import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connexion from './components/Connexion';
import Error from './components/Error';
import reportWebVitals from './reportWebVitals';

// ReactRouter
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root = () => (
    <Router>
        <Switch>
            <Route
                exact path='/'
                component={Connexion}
            />
            <Route
                exact path='/pseudo/:pseudo'
                component={App}
            />
            <Route component={Error} />
        </Switch>
    </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
