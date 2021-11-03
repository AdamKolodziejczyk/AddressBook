import React, { useState } from "react";
import axios from 'axios';
import mailbookpostman from './mailbook-postman.svg';
import './AddressBook.css';

  const AddressBook = () => {
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
          <div className="cards">
            {data.map(element => (
             <div className="containerDiv">
              <div className="containerScroll">
               <ol>
                <li>City: {element.city}                          <br/> </li>
                <li>City prefix: {element.city_prefix}            <br/></li>
                <li>City suffix: {element.city_suffix}            <br/></li>
                <li>Community: {element.community}                <br/></li>
                <li>County: {element.country}                     <br/></li>
                <li>Street address: {element.street_address}      <br/></li>
                <li>Secondary address: {element.secondary_address}<br/></li>
                <li>Full address: {element.full_address}          <br/></li>
                <li>Country code: {element.country_code}          <br/></li>
                <li>State: {element.state}                        <br/></li>
                <li>State abbr: {element.state_abbr}              <br/></li>
                <li>Street name: {element.street_name}            <br/></li>
                <li>Street suffix: {element.street_suffix}        <br/></li>
                <li>Time zone: {element.time_zone}                <br/></li>
                <li>Zip: {element.zip}                            <br/></li>
                <li>Zip code: {element.zip_code}                  <br/></li>
                <li>Building number:  {element.building_number}   <br/></li>
                <li>Id: {element.id}                              <br/></li>
                <li>Mail box: {element.mail_box}                  <br/></li>
                <li>Postcode: {element.postcode}                  <br/></li>
                <li>Uid: {element.uid}                            <br/></li>
               </ol>
              </div>
             </div>
            ))}
          </div>
         <img className="addressBookImg" src={mailbookpostman} alt="" />
        <div className="addressBookCounter">
          <span>
           Maksymalna ilosc klikniec w przycisk wynosi: 5<br/>
           <b className="addressBookB">Twoja liczba klikniec: {number + 0}</b>
           </span>
          <button className="addressBookButton" disabled={limit} onClick={buttonclick}>Pobierz Dane</button>
        </div>
      </div>
    );
  };
  
export default AddressBook;