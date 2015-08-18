import React from 'react';
import {Link} from 'react-router';

export default class AccessingDataset extends React.Component {

  render() {

    return (
      <div className="container">
        <br />
        <div className="card-panel">
          <h4 className="card-title">Accessing the Dataset</h4>

          <h5 className="card-sub-title">Read the Terms (no, really)</h5>
          <p>We provide the Ingreenlight Dataset under the Creative Commons Attribution-NonCommercial License [<a href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC-BY-NC</a>] as described in our <a href="http://www.greenlightvr.com/tos" target="_blank">Terms of Service</a>. This document provides guidelines for commercial and non-commercial licensees, but does not alter the Terms of Service or any applicable commercial agreements. We may modify this document periodically without notice. Your continued use of the Ingreenlight Dataset after the effective date of any changes means that you agree to the changes.</p>
          <p>Please contact us with any questions.</p>

          <h5 className="card-sub-title">Data Products / Access Terms & Licensing</h5>
          <p>Ingreenlight has three license requirements:</p>
          <table className="bordered">
            <thead>
              <tr>
                <th data-field="product">Product</th>
                <th data-field="access-license-requirements">Access / License Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="getting-started">REST API</Link></td>
                <td>
                  <ul>
                    <li>Commercial Use License</li>
                    <li>Non-Commercial Use License</li>
                    <li>Membership in Ingreenlight Venture Program</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <h5 className="card-sub-title">Commercial Use License</h5>
          <p>To protect the community’s investment and to safeguard the Dataset’s integrity, we require a license for commercial use. This license is required regardless of how you access the Dataset.</p>
          <p>Uses may be commercial whether they are public facing or internal, free or paid. Any use of the Ingreenlight Dataset that does not fall under a non-commercial exemption is considered commercial use. Most uses of of the Ingreenlight Dataset fall into this category.</p>
          <p>To learn more about our commercial licensing and get started, please send an email to our licensing group at <a href="mailto:info@greenlightvr.com">info@greenlightvr.com</a></p>
          <p>Existing commercial licensees should <a href="http://www.wufoo.com/" target="_blank">fill out this form</a> to gain access to the Ingreenlight API, Excel Exports, and the ODM.</p>

          <h5 className="card-sub-title">Non-Commercial Use License</h5>
          <p>Access to the Ingreenlight Dataset is available for confirmed non-commercial uses. A limited number of use cases fall under this definition including:</p>
          <ul className="list-disc">
            <li>Commercial Use License</li>
            <li>Non-Commercial Use License</li>
            <li>Membership in Ingreenlight Venture Program</li>
          </ul>
          <p>Groups requesting non-commercial access should <a href="http://www.wufoo.com/" target="_blank">fill out this form</a> to gain access to the Ingreenlight API, Excel Exports, and the ODM.</p>

          <h5 className="card-sub-title">Ingreenlight Venture Program Membership</h5>
          <p>Active membership in the CBVP provides you with a limited commercial license to the Ingreenlight Dataset. CBVP members can leverage the dataset for internal investment portfolio management and sourcing new investment opportunities. Ingreenlight Data acquired through this limited license cannot be leveraged for other purposes or redistributed without an additional license.</p>
          <p>Members of the Ingreenlight Venture Program should <a href="http://www.wufoo.com/" target="_blank">fill out this form</a> to gain access to the Ingreenlight API, Excel Exports, and the ODM.</p>

          <h5 className="card-sub-title">Use of the Ingreenlight Trademarks</h5>
          <p>Generally, the Ingreenlight Dataset and Ingreenlight trademarks may not be used for commercial purposes without Ingreenlight’s express written permission. Limited use of Ingreenlight’s trademarks is acceptable provided that the trademarks are used for the purpose of identifying or describing Ingreenlight’s products or services, and provided that such usage includes a link back to the applicable Ingreenlight profile.</p>
        </div>
      </div>
    );
  }
}
