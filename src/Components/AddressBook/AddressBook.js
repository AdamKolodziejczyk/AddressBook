import React, { useState } from 'react';
import axios from 'axios';
import MailBook from './mailbook-postman.svg'
import './AddressBook.css';

  const AddressBook = () => {
  const [sending, setSending] = useState('')
  const [counter , setCounter ] = useState(0);
  const baseURL = "https://random-data-api.com/api/address/random_address";

  const goToNext = () =>
    setCounter ((addToCounter) => addToCounter + 1);
 
  const getData = () => {
    axios.get(baseURL).then(res => setSending(res.data)
    )
  }
 
  const buttonClick = () => {
    goToNext()
    getData()
  }

  const limit = counter ===  5;

  return (
    <div className="addressBook">
       <p className="addressBookTextBox1">
        City: <br/>
        City prefix: <br/>
        City suffix: <br/>
        Community:<br/>
        County: <br/>
        Street_address: <br/>
        Secondary_address: <br/>
        Full address: <br/>
        Country code: <br/>
        State: <br/>
        State abbr: <br/>
        Street name: <br/>
        Street suffix:<br/>
        Time zone: <br/>
        Zip: <br/>
        Zip code: <br/>
        Building number:  <br/>
        Id: <br/>
        Mail box: <br/>
        Postcode: <br/>
        Uid: <br/>
       </p>
      <div className="addressBookTextBox2">
        {sending.city}<br/>
        {sending.city_prefix}<br/>
        {sending.city_suffix}<br/>
        {sending.community}<br/>
        {sending.country}<br/>
        {sending.street_address}<br/>
        {sending.secondary_address}<br/>
        {sending.country_code}<br/>
        {sending.full_address}<br/>
        {sending.state}<br/>
        {sending.state_abbr}<br/>
        {sending.street_name}<br/>
        {sending.street_suffix}<br/>
        {sending.time_zone}<br/>
        {sending.zip}<br/>
        {sending.zip_code}<br/>
        {sending.building_number}<br/>
        {sending.id}<br/>
        {sending.mail_box}<br/>
        {sending.postcode}<br/>
        {sending.uid}<br/>
     </div>

        <div>
          <img className="addressBookImg" src={MailBook} alt="" />
        </div>
     <div className="addressBookCounter">
       <span>
         Maksymalna ilosc klikniec w przycisk wynosi: 5<br/>
         <b className="addressBookB">Twoje klikniecia: {counter + 0}</b>
       </span>
      <button className="addressBookButton" disabled={limit} onClick={buttonClick}>Pobierz Dane</button>
     </div>
     
    </div>
  );
}

export default AddressBook;
