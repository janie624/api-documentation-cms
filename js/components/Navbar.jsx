import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper teal darken-2">
          <div className="container">
            <Link to="home" className="brand-logo">
              <img src='/images/greenlight-logo.png' className='responsive-img'/>
            </Link>
            <a href="#" data-activates="mobile-nav" className="button-collapse white-text">
              <i className="mdi-navigation-menu"></i>
            </a>
            
            <ul className="right hide-on-med-and-down">
              <li><Link className="white-text" to="home">Accessing the Dataset</Link></li>
              <li><Link className="white-text" to="home">REST API</Link></li>
            </ul>
            
            <ul className="side-nav" id="mobile-nav">
              <li><Link className="white-text" to="home">Accessing the Dataset</Link></li>
              <li><Link className="white-text" to="home">REST API</Link></li>
            </ul>            
          </div>
        </div>
      </nav>
    );
  }
}
