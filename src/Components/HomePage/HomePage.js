import React from 'react';
import './HomePage.css';
import preview from './preview.jpg'

const HomePage = () => {
 return (
    <div className="homePage">
        <p className="homePageText">
            <b>Darmowy i łatwy sposób na zbieranie adresów.</b><br/>
                Najlepsze narzędzie, które pomoże Ci zebrać adresy<br/> od przyjaciół, rodziny do zaproszeń ślubnych, zaproszeń na przyjęcia lub innych tradycyjnych wpisów.
        </p>
       <img src={preview} alt="" />
    </div>
  );
}

export default HomePage;
