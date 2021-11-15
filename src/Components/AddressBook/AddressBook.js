import React, { useState } from "react";
import axios from 'axios';
import Form from "./Form/Form";
import mailbookpostman from './MailbookPostman.svg';
import './AddressBook.css';

const columns = [
  {
    title: "City",
    name: "city"
  },
  {
    title: "City prefix",
    name: "city_prefix"
  },
  {
    title: "City suffix",
    name: "city_suffix"
  },
  {
    title: "Community",
    name: "community"
  },
  {
    title: "Country",
    name: "country"
  },
  {
    title: "Street address",
    name: "street_address"
  },
  {
    title: "Secondary address",
    name: "secondary_address"
  },
  {
    title: "Full address",
    name: "full_address"
  },
  {
    title: "Country code",
    name: "country_code"
  },
  {
    title: "State",
    name: "state"
  },
  {
    title: "State abbr",
    name: "state_abbr"
  },
  {
    title: "Street name",
    name: "street_name"
  },
  {
    title: "Street suffix",
    name: "street_suffix"
  },
  {
    title: "Time zone",
    name: "time_zone"
  },
  {
    title: "Zip",
    name: "zip"
  },
  {
    title: "Zip code",
    name: "zip_code"
  },
  {
    title: "Building number",
    name: "building_number"
  },
  {
    title: "Id",
    name: "id"
  },
  {
    title: "Mail box",
    name: "mail_box"
  },
  {
    title: "Postcode",
    name: "postcode"
  },
  {
    title: "Uid",
    name: "uid"
  },
]

const AddressBook = () => {
  const [openModal, setOpenModal] = useState(false);
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);
  const limit = number === 5;
  const baseURL = "https://random-data-api.com/api/address/random_address";

  const getData = () => {
    axios.get(baseURL).then(res => {
      const newData = data;
      newData.push(res.data)
      setData([...newData])
    })
  };

  const loadMore = () => {
    setNumber(number + 1);
  };

  const buttonclick = () => {
    getData();
    loadMore();
  };

  return (
    <div className="addressBook">
      <div className="cardsBox">
        <div className="cards">
          {data.map(element => (
            <div className="containerDiv">
              <div className="containerScroll">
                {columns.map(column => (
                  <div className="addressBookColumnDiv">
                    <p className="cardsColumnText1">{column.title}:</p>
                    <p> {element[column.name]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className="addressBookImg" src={mailbookpostman} alt="" />
      <div className="addressBookCounter">
        <p className="addressBookText">Maksymalna ilosc klikniec w przycisk wynosi: 5</p>
        <p className="addressBookB">Twoja liczba klikniec: {number + 0}</p>
        <button className="addressBookButton" disabled={limit} onClick={buttonclick}>Pobierz Dane</button>
      </div>
      <div className="addressBookModalDiv">
        <p>Kliknij w przycisk by otworzyc okno formularza.</p>
        <button className="openModalButton" onClick={() => setOpenModal(true)}>Otworz</button>
        {openModal && <Form openModal={openModal} setCloseModal={setOpenModal} columns={columns}/>}
      </div>
    </div>
  );
};

export default AddressBook;