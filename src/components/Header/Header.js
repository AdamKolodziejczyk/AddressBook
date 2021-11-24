import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to={`/`} >
        <div className="headerDiv1">Mail book</div>
      </Link>
      <Link to={`/`} >
        <div className="headerDiv2">Strona glowna</div>
      </Link>
      <Link to={`/addressbook`} >
        <div className="headerDiv3">Książka adresowa</div>
      </Link>
    </div>
  );
}

export default Header;
