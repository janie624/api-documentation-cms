import React from 'react';
import Router from 'react-router';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar/>
        <Router.RouteHandler/>
        <Footer/>
      </div>
    );
  }

}
