import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>Host Events</p>
          </div>
          <div className="list">
            <ul>
              <li>Publish Your Events</li>
              <li>Promote Your Events</li>
              <li>Host Recorded Events</li>
              <li>Sell Tickets Online</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Discover Events</p>
          </div>
          <div className="list">
            <ul>
              <li>Events for You</li>
              <li>Virtual Events</li>
              <li>Get Event Updates</li>
              
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Explore</p>
          </div>
          <div className="list">
            <ul>
              <li>Plugins</li>
              <li>Blog</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
      <span class="footer-copyright-child">© Copyright 2021. All Rights Reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
