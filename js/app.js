'use strict';

import React from 'react';
import Router from 'react-router';
import App from './components/App.jsx';
import Home from './pages/Home.jsx';

var routes = (
  <Router.Route handler={App} path="/">
    <Router.Route name="home" path="/" handler={Home}/>
  </Router.Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  $(function(){
    React.render(<Handler/>, document.getElementsByTagName('main')[0]);
  });
});