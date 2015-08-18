import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import {Link} from 'react-router';

export default class CodeExamples extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      javascript: 'import request from "superagent";\n\nfunction b64EncodeUnicode(str) {\n\treturn btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {\n\t\treturn String.fromCharCode("0x" + p1);\n\t}));\n}\n\nfunction authorization() {\n\treturn "Basic " + b64EncodeUnicode(apiToken + ":");\n}\n\nrequest\n\t.get("http://www.ingreenlight.com/api/v1/organizations/search/?q=" + name)\n\t.set("Authorization", authorization())\n\t.set("Access-Control-Allow-Origin", true)\n\t.unset("X-Requested-With")\n\t.end((err, res) => {\n\t\treturn (err) ? handleFailure(err) : handleSuccess(res.body);\n});'
    };
  }

  render() {

    return (
      <div className="container">
        <div className="card-panel">
          <div className="row">
            <div className="col m3 s12">
              <Sidebar />
            </div>
            <div className="col m9 s12">
              <h4 className="card-title">Code Examples</h4>
              <p>GreenlightVR does not currently provide drivers for accessing the API.</p>
              <p>A number of members of the developer community have, however, created some code examples.</p>
              <p>Below is a list of community libraries for the GreenlightVR API. We provide these links as an information service to the community. GreenlightVR neither endorses nor warranties these libraries.</p>

              <h5 className="card-sub-title">Javascript</h5>
              <pre>{this.state.javascript}</pre>

              <h5 className="card-sub-title">Ruby</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
