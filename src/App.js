import React, { Component, Fragment } from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import history from './components/history';

import Footer from './components/footer';
import Routes from './components/routes';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Fragment>
            <Routes/>
            <Footer/>
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;