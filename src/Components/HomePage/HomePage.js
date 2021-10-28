import React from 'react';
import './HomePage.css';
import preview from './preview.jpg'

const HomePage = () => {
 return (
    <div className="homePage">
      <div className="homePageBox">
        <p className="homePageText">
            <b className="homePageB">Darmowy i łatwy sposób na zbieranie adresów.</b><br/>
                Najlepsze narzędzie, które pomoże Ci zebrać adresy<br/> od przyjaciół, rodziny do zaproszeń ślubnych, zaproszeń na przyjęcia lub innych tradycyjnych wpisów.
        </p>
       <img className="homePageImg" src={preview} alt="" />
       </div>
    </div>
  );
}

export default HomePage;
