import React from 'react';
import Hero from './Hero.jsx';
import {Link} from 'react-router';

export default class Home extends React.Component {

  render() {

    return (
      <div className="glhp-home">
        <Hero/>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col m5 offset-m1 s12">
              <h5>Start Here</h5>
              <h6></h6>
              <ul>
                <li>Learn how to request access:</li>
                <li><Link to="accessing-dataset">Accessing the Dataset</Link></li>
              </ul>
            </div>
            <div className="col m5 s12">
              <h5>GreenlightVR Data Services</h5>
              <ul>
                <li><Link to="getting-started">REST API</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    );
  }
}
