import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

function Header() {
  return (
      <div className="header-container">
          <Link to="/">
            <img alt='logo' src={require('assets/img/logo.png')}/>
          </Link>
      </div>
  );
}

export default Header;