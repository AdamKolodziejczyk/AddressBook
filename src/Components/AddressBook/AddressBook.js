import React, { useState } from 'react';
import axios from 'axios';
import MailBook from './mailbook-postman.svg'
import './AddressBook.css';

const AddressBook = () => {
  const [sending, setSending] = useState('')

  const baseURL = "https://random-data-api.com/api/address/random_address";

  const getData = () => {
    axios.get(baseURL).then(res => {console.log(res.data)
      setSending(res.data)
    })
  }

  return (
    <div className="addressBook">
      
      <button className="addressBookButton" onClick={getData}>Pobierz Dane</button>
      
     <p className="adressBookTextBox1">
     City: {sending.city}<br/>
     City_prefix: {sending.city_prefix}<br/>
     City_suffix: {sending.city_suffix}<br/>
     Community: {sending.community}<br/>
     County: {sending.country}<br/>
     Street_address: {sending.street_address}<br/>
     Secondary_address: {sending.secondary_address}<br/>
     Full_address: {sending.full_address}<br/>
     Country_code: {sending.country_code}<br/>
     State: {sending.state}<br/>
     State_abbr: {sending.state_abbr}<br/>
     Street_name: {sending.street_name}<br/>
     Street_suffix: {sending.street_suffix}<br/>
     Time_zone: {sending.time_zone}<br/>
     Zip: {sending.zip}<br/>
     Zip_code: {sending.zip_code}<br/>
     Building_number: {sending.building_number} <br/>
     Id: {sending.id}<br/>
     Mail_box: {sending.mail_box}<br/>
     Postcode: {sending.postcode}<br/>
     Uid: {sending.uid}<br/>
     </p>
     <div><img className="addressBookImg" src={MailBook} alt="" /></div>
    </div>
    
  );
}

export default AddressBook;
