import React from 'react';
import {Link} from 'react-router';

export default class Footer extends React.Component {
  render() {

    return (
      <footer className="page-footer white">
        <div className="footer-copyright transparent black-text">
          <div className="container">
            © {new Date().getFullYear()} Greenlight VR
          </div>
        </div>
      </footer>
    );
  }
}
