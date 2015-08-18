import React from 'react';
import request from 'superagent';
import Sidebar from '../components/Sidebar.jsx';
import {Link} from 'react-router';

export default class OrganizationSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      apiToken: ''
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
              <h4 className="card-title"><span className="badge request-type green white-text">GET</span>/api/v1/organizations/search</h4>

              <h5 className="card-sub-title">Definition</h5>
              <pre>http://www.ingreenlight.com/api/v1/organizations/search/?q=:name</pre>

              <h5 className="card-sub-title">Parameters</h5>
              <table className="condensed">
                <tbody>
                  <tr>
                    <td className="right-align"><b>name</b></td>
                    <td>String</td>
                  </tr>
                  <tr>
                    <td className="right-align red-text">required</td>
                    <td>The name of the organization</td>
                  </tr>
                </tbody>
              </table>

              <h5 className="card-sub-title">Documentation</h5>
              <p><Link to="organization">Organizations</Link> are Companies, Investors, Schools, or Groups.</p>
              <p>A call to the /api/v1/organizations/search/?q=:name returns an <Link to="organization">Organization</Link>.</p>

              <h5 className="card-sub-title">Try It Out</h5>
              <div className="right-align auth-box">
                <a className="auth-action green" onClick={this.handleClick.bind(this)}>
                  <i className="small material-icons white-text key">vpn_key</i>
                  <i className="small material-icons white-text done">done</i>
                </a>
                <div className="row">
                  <div className="col m6 s12">
                    <form className="name-form">
                      <button type="submit" className="hidden"></button>
                      <div className="input-field">
                        <input id="name" type="text" onChange={this.handleChangeName.bind(this)}/>
                        <label className="active">Name</label>
                      </div>
                    </form>
                  </div>
                  <div className="col m6 s12">
                    <form className="auth-form grey darken-3 white-text">
                      <button type="submit" className="hidden"></button>
                      <h5 className="grey darken-4 left-align"><i className="small material-icons">supervisor_account</i>User Information</h5>
                      <div className="input-field">
                        <input id="api-token" type="text" onChange={this.handleChangeApiToken.bind(this)}/>
                        <label className="active">Api Token</label>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="clearfix">
                  <form className="search-form">
                    <div className="input-field">
                      <span className="badge request-type green white-text">GET</span>
                      <input id="url" type="text" placeholder="http://www.ingreenlight.com/api/v1/organizations/search/?q=:name" disabled onChange={this.handleChangeName.bind(this)}/>
                      <button type="submit" className="green white-text" onClick={this.handleSubmitSearch.bind(this)} disabled={this.state.submitDisabled}>Try it!</button>
                    </div>
                  </form>
                </div>
                <pre id="result" className="left-align">
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleClick(event) {
    event.stopPropagation();
    $('.auth-box').toggleClass('open');
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeApiToken(event) {
    this.setState({ apiToken: event.target.value });
  }

  handleSubmitSearch(event) {
    event.preventDefault()
    event.stopPropagation();

    this.setState({ submitDisabled: true });
    request
      .get('http://www.ingreenlight.com/api/v1/organizations/search/?q=' + this.state.name)
      .set('Authorization', this.authorization())
      .set('Access-Control-Allow-Origin', true)
      .unset('X-Requested-With')
      .end((err, res) => {
        this.setState({ submitDisabled: false });
        return (err) ? this.handleFailure(err) : this.handleSuccess(res.body);
      });
  }

  b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode("0x" + p1);
    }));
  }

  authorization() {
    return "Basic " + this.b64EncodeUnicode(this.state.apiToken + ":");
  }

  syntaxHighlight(json) {
    if (typeof json != 'string') {
      json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var klass = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          klass = 'key';
        } else {
          klass = 'string';
        }
      } else if (/true|false/.test(match)) {
        klass = 'boolean';
      } else if (/null/.test(match)) {
        klass = 'null';
      }
      return '<span class="' + klass + '">' + match + '</span>';
    });
  }

  handleFailure(err) {
    $('#result').html(this.syntaxHighlight(err)).show();
  }

  handleSuccess(json) {
    $('#result').html(this.syntaxHighlight(json)).show();
  }
}
