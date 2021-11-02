import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from 'axios';
import mailbookpostman from './mailbook-postman.svg'
import './AddressBook.css';

const AddressBook = () => {
  const [data, setData] = useState([])
  const baseURL = "https://random-data-api.com/api/address/random_address";

  useEffect(() => {
    setData([])
  }, [])

  const getData = () => {
    axios.get(baseURL).then(res => {
      const newData = data;
      newData.push(res.data)
      setData([...newData])
    })
  }

  return (
    <div className="addressBook">
      <div className="wrapper">
        <div className="cards">
          {data.map((element) => (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <ul>
                    <li>{element.city}</li>
                    <li>{element.id}</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <img className="addressBookImg" src={mailbookpostman} alt="" />
      </div>
      <div className="addressBookCounter">
        <button className="addressBookButton" onClick={getData}>Pobierz Dane</button>
      </div>
    </div>
  );
}

export default AddressBook;