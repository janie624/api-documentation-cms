import React from 'react';
import {Link} from 'react-router';

export default class Sidebar extends React.Component {
  render() {

    return (
      <div className="sidebar">
        <h6>API DOCUMENTATION</h6>
        <ul>
          <li><Link to="getting-started">Getting Started</Link></li>
          <li><Link to="using-the-api">Using the API</Link></li>
        </ul>
      </div>
    );
  }
}
