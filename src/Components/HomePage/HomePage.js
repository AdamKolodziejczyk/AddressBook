import React from 'react';
import './HomePage.css';
import preview from './preview.png'

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePageBox">
        <p className="homePageText">
          <b className="homePageBold">Darmowy i łatwy sposób na zbieranie adresów.</b><br />
          <p>Najlepsze narzędzie, które pomoże Ci zebrać adresy<br /> od przyjaciół, rodziny do zaproszeń ślubnych, zaproszeń na przyjęcia lub innych tradycyjnych wpisów.</p>
        </p>
        <img className="homePagePicture" src={preview} alt="" />
      </div>
    </div>
  );
}

export default HomePage;
