import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import {Link} from 'react-router';

export default class GettingStarted extends React.Component {

  render() {

    return (
      <div className="container">
        <div className="card-panel">
          <div className="row">
            <div className="col m3 s12">
              <Sidebar />
            </div>
            <div className="col m9 s12">
              <h4 className="card-title">Getting Started</h4>
              <p>The Ingreenlight API is a (relatively) straightforward REST service that allows developers to access data in the <a href="http://www.ingreenlight.com/" target="_blank">Ingreenlight</a>.</p>

              <h5 className="card-sub-title">1. Request an API Key</h5>
              <p>We review every request for access to the Ingreenlight Dataset and provision API Keys manually, so please answer the questions on the form as completely as possible.</p>
              <p>To get started, check out our <Link to="accessing-dataset">Accessing the Dataset</Link> page.</p>

              <h5 className="card-sub-title">2. Learn How the API Works</h5>
              <p>The REST API is very consistent in the way it accepts parameters and in the way in formats responses.</p>
              <p>Please take a moment to read Using the API to make sure you understand the core principals guiding all interaction with the Ingreenlight REST API.</p>

              <h5 className="card-sub-title">3. Use "Try it Now"</h5>
              <p>Our API Documentation has Try it Now built into every Endpoint page. To use it, just look for the green key icon.</p>
              <div className="center-align"><img className="responsive-img" src="/images/key.png"/></div>
              <p>Clicking the key to reveals the user_key form.</p>
              <div className="center-align"><img className="responsive-img" src="/images/user-information.png"/></div>
              <p>Type or paste in your user_key and and hit RETURN to save your key. From this point on, the Try it Now feature will automatically append your user_key to every request you make through API Documentation.</p>
              <p>Pretty cool, eh?</p>

              <h5 className="card-sub-title">4. Ask for Help</h5>
              <p>Having troubles? Ask the community over at <a href="https://groups.google.com/" target="_blank">Ingreenlight API Google Group</a> or write to us at <a href="mailto:info@greenlightvr.com">info@greenlightvr.com</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
