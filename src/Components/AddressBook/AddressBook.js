import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from 'axios';
import mailbookpostman from './mailbook-postman.svg'
import './AddressBook.css';

  const AddressBook = () => {
  const container = [];

  const [data, setData] = useState('');
  
  const [visible, setVisible] = useState(0) ;

  const baseURL = "https://random-data-api.com/api/address/random_address";

  const limit = visible ===  5;

  const loadMore = () => {
    setVisible(visible + 1);
  };

  const getData = () => {
    axios.get(baseURL).then(res => setData(res.data)
    )
  }

  useEffect(() => {
    getData();
  }, []);

  container.push(data)

  const renderCard = (city) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>
            <ul>
              <li>{city.city}</li>
              <li>{city.id}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
  <div className="addressBook">
     <div className="wrapper">
       <div className="cards">
        {container.slice(0, visible).map(renderCard)}
       </div>
         <img className="addressBookImg" src={mailbookpostman} alt="" />
     </div>
     <div className="addressBookCounter">
      <span>
        Maksymalna ilosc klikniec w przycisk wynosi: 5<br/>
        <b className="addressBookB">Twoja ilosc klikniec wynosi: {visible + 0}</b>
      </span>
      <button className="addressBookButton" disabled={limit} onClick={loadMore}>Pobierz Dane</button>
    </div>
  </div>
  );
}

export default AddressBook;