import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import {Link} from 'react-router';

export default class UsingTheAPI extends React.Component {

  render() {

    return (
      <div className="container">
        <div className="card-panel">
          <div className="row">
            <div className="col m3 s12">
              <Sidebar />
            </div>
            <div className="col m9 s12">
              <h4 className="card-title">Using the API</h4>

              <h5 className="card-sub-title">Introduction</h5>
              <p>The Ingreenlight API is a RESTful service that enables approved developers to retrieve data from the Ingreenlight Dataset.</p>
              <p>The Ingreenlight API can be accessed programmatically (the most common use case), and a number of developers have written Language-Specific Libraries to jump-start your development.</p>
              <p>For simple testing / inspection, the Ingreenlight API can also be accessed through any web browser capable of displaying JSON.</p>

              <h5 className="card-sub-title">Authentication</h5>
              <p>The Ingreenlight API uses token-based authentication, which means that developers must pass their individual user_key parameter with every request. An example request for the /organizations endpoint would read as follows:</p>
              <pre>http://www.ingreenlight.com/api/v1/organizations/search/?q=name</pre>
              <p>This user_key is used to validate each developer’s access to the API and ensure that any rate limits or quotas are respected.</p>
              <p>If a developer omits the user_key, overruns a rate limit, or exceeds a quota, the system will respond with an error message.</p>
              <p>Developers can learn about access to the API and requesting user_keys in the <Link to="getting-started">Getting Started</Link> section.</p>

              <h5 className="card-sub-title">Item Search</h5>
              <p>The Ingreenlight API provides Item Search endpoints to retrieve the properties of an item by it’s name</p>
              <p>Such endpoints are available for the following Items:</p>
              <table className="bordered">
                <thead>
                  <tr>
                    <th data-field="node-type">Node Type</th>
                    <th data-field="endpoint">Endpoint</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#">Organization</a></td>
                    <td><a href="#">/api/v1/organizations/search/?q=name</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
