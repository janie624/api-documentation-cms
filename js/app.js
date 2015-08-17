'use strict';

import React from 'react';
import Router from 'react-router';
import App from './components/App.jsx';
import Home from './pages/Home.jsx';
import AccessingDataset from './pages/AccessingDataset.jsx';
import Docs from './pages/Docs.jsx';

var routes = (
  <Router.Route handler={App} path="/">
    <Router.Route name="home" path="/" handler={Home}/>
    <Router.Route name="accessing-dataset" path="/accessing-the-dataset" handler={AccessingDataset}/>
    <Router.Route name="docs" path="/docs" handler={Docs}/>
  </Router.Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  $(function(){
    React.render(<Handler/>, document.getElementsByTagName('main')[0]);
  });
});