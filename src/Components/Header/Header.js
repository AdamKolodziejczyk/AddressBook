import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">

       <Link to={`/`} >
         <div className="namePageDiv">Mail book</div>
        </Link>
       <Link to={`/`} >
         <div className="homePageDiv">Strona glowna</div>
         </Link>
         <Link to={`/ksiazkaAdresowa`} >
        <div className="addressBookDiv">Książka adresowa</div>
        </Link>
    </div>
  );
}

export default Header;
