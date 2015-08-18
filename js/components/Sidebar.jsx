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
          <li><Link to="code-examples">Code Examples</Link></li>
        </ul>
        <br />

        <h6>ENDPOINTS</h6>
        <ul>
          <li><Link to="organization-search"><span className="badge request-type green white-text">GET</span>/api/v1/organizations/search</Link></li>
        </ul>
        <br />

        <h6>API ENTITIES TYPES</h6>
        <ul>
          <li><Link to="organization">Organization</Link></li>
        </ul>
      </div>
    );
  }
}
