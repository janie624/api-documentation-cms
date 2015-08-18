import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import {Link} from 'react-router';

export default class Organization extends React.Component {

  render() {

    return (
      <div className="container">
        <div className="card-panel">
          <div className="row">
            <div className="col m3 s12">
              <Sidebar />
            </div>
            <div className="col m9 s12">
              <h4 className="card-title">Organization</h4>
              <p>An Organization, in GreenlightVR, is a business. That generally means that it can category People, receive Funding, launch Products.</p>
              <p>Organizations is one of the following type:</p>
              <ul className="list-disc">
                <li>Company</li>
                <li>Group</li>
                <li>Investor</li>
                <li>School</li>
              </ul>
              <p>Currently, Organizations can "belong" to one or more of the following categorires:</p>
              <ul className="list-disc">
                <li>Audio Services</li>
                <li>Augmented Reality</li>
                <li>Cameras / Capture Hardware</li>
                <li>Content Publisher</li>
                <li>Distribution Platform</li>
                <li>Engines</li>
                <li>Group / Association</li>
                <li>Head Mounted Display</li>
                <li>Information Services</li>
                <li>Investment Firm / Group</li>
                <li>Media Publisher</li>
                <li>Peripherals</li>
                <li>Professional Services</li>
                <li>Research Institution</li>
                <li>School</li>
                <li>Stitching Software</li>
              </ul>
              <p>Organizations can also "belong" to one or more of the following industries:</p>
              <ul className="list-disc">
                <li>Accommodation and Food Services</li>
                <li>Administrative and Support and Waste Management and Remediation Services</li>
                <li>Agriculture, Forestry, Fishing and Hunting</li>
                <li>Arts, Entertainment, and Recreation</li>
                <li>Construction</li>
                <li>Educational Services</li>
                <li>Finance and Insurance</li>
                <li>Health Care and Social Assistance</li>
                <li>Information</li>
                <li>Information Services</li>
                <li>Management of Companies and Enterprises</li>
                <li>Manufacturing</li>
                <li>Mining, Quarrying, and Oil and Gas Extraction</li>
                <li>Professional, Scientific, and Technical Services</li>
                <li>Real Estate and Rental and Leasing</li>
                <li>Retail Trade</li>
                <li>Transportation and Warehousing</li>
                <li>Utilities</li>
                <li>Wholesale Trade</li>
              </ul>

              <h5 className="card-sub-title">Properties</h5>
              <table className="bordered">
                <thead>
                  <tr>
                    <th data-field="property">Property</th>
                    <th data-field="type">Type</th>
                    <th data-field="description">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_id</td>
                    <td>String</td>
                    <td>unique identifier within "Organization" namespace</td>
                  </tr>
                  <tr>
                    <td>name</td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>legalName</td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>description</td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>shortDescription</td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>address</td>
                    <td>Address</td>
                    <td>street1, street2, state, country, postcode, suburb</td>
                  </tr>
                  <tr>
                    <td>logo</td>
                    <td>Cloudinary Image</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>email</td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>phone</td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>size</td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>funding</td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>foundingLocation</td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>foundingYear</td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>facebookUrl</td>
                    <td>Url</td>
                    <td>Fully-qualified URL</td>
                  </tr>
                  <tr>
                    <td>twitterUrl</td>
                    <td>Url</td>
                    <td>Fully-qualified URL</td>
                  </tr>
                  <tr>
                    <td>linkedinUrl</td>
                    <td>Url</td>
                    <td>Fully-qualified URL</td>
                  </tr>
                  <tr>
                    <td>companyUrl</td>
                    <td>Url</td>
                    <td>Fully-qualified URL</td>
                  </tr>
                  <tr>
                    <td>wikipediaUrl</td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>approved</td>
                    <td>Boolean</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>createdAt</td>
                    <td>Timestamp</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>updatedAt</td>
                    <td>Timestamp</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <h5 className="card-sub-title">Relationships</h5>
              <table className="bordered">
                <thead>
                  <tr>
                    <th data-field="name">Name</th>
                    <th data-field="cardinality">Cardinality</th>
                    <th data-field="type">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>founder</td>
                    <td>on-to-one</td>
                    <td>Person</td>
                  </tr>
                  <tr>
                    <td>employees</td>
                    <td>on-to-many</td>
                    <td>Person</td>
                  </tr>
                  <tr>
                    <td>projects</td>
                    <td>on-to-many</td>
                    <td>Project</td>
                  </tr>
                  <tr>
                    <td>contributions</td>
                    <td>on-to-many</td>
                    <td>Contributions</td>
                  </tr>
                  <tr>
                    <td>fundedProjects</td>
                    <td>on-to-many</td>
                    <td>Project</td>
                  </tr>
                  <tr>
                    <td>mentions</td>
                    <td>on-to-many</td>
                    <td>Mention</td>
                  </tr>
                  <tr>
                    <td>subOrganization</td>
                    <td>one-to-one</td>
                    <td>Organization</td>
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
