import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from 'react-modal'
import './Form.css';


const Form = ({ openModal, setCloseModal, columns }) => {

  const [fromErrors, setFromErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({
    city: "",
    city_prefix: "",
    city_suffix: "",
    community: "",
    country: "",
    street_address: "",
    secondary_address: "",
    full_address: "",
    country_code: "",
    state: "",
    state_abbr: "",
    street_name: "",
    street_suffix: "",
    time_zone: "",
    zip: "",
    zip_code: "",
    building_number: "",
    id: "",
    mail_box: "",
    postcode: "",
    uid: "",
  })

  const submit = (e) => {
    e.preventDefault();
    const url = "http://localhost:3005/address-book"
    axios.post(url, {
      city: data.city,
      city_prefix: data.city_prefix,
      city_suffix: data.city_suffix,
      community: data.community,
      country: data.country,
      street_address: data.street_address,
      secondary_address: data.secondary_address,
      full_address: data.full_address,
      country_code: data.country_code,
      state: data.state,
      state_abbr: data.state_abbr,
      street_name: data.street_name,
      street_suffix: data.street_suffix,
      time_zone: data.time_zone,
      zip: data.zip,
      zip_code: data.zip_code,
      building_number: data.building_number,
      id: data.id,
      mail_box: data.mail_box,
      postcode: data.postcode,
      uid: data.uid
    })
    setFromErrors(validate(data))
    setIsSubmit(true)
  }

  const handle = (e, name) => {
    const newData = { ...data }
    const { value } = e.target
    newData[name] = value;
    setData(newData)
    console.log(newData)
  }

useEffect(() => {
  if(Object.keys(fromErrors).length === 0 && isSubmit) {
    console.log(data)
  }
}, [data, fromErrors, isSubmit])

  const validate = (values) => {

    const errors={};

    if(!values.city) {
      errors.city="City is required";
    }
  
    if(!values.city_prefix) {
      errors.city_prefix="City prefix is required";
    }
  
    if(!values.city_suffix) {
      errors.city_suffix="City suffix is required";
    }
    
    if(!values.community) {
      errors.community="Community is required";
    }
  
    if(!values.country) {
      errors.country="Country is required";
    }
  
    if(!values.street_address) {
      errors.street_address="Street address is required";
    }
  
    if(!values.secondary_address) {
      errors.secondary_address="Secondary address is required";
    }
  
    if(!values.full_address) {
      errors.full_address="Full address is required";
    }
    
    if(!values.country_code) {
      errors.country_code="Country code is required";
    }
  
    if(!values.state) {
      errors.state="State is required";
    }
  
    if(!values.state_abbr) {
      errors.state_abbr="State abbr is required";
    }
  
    if(!values.street_name) {
      errors.street_name="Street name is required";
    }
  
    if(!values.street_suffix) {
      errors.street_suffix="Street suffix is required";
    }
  
    if(!values.time_zone) {
      errors.time_zone="Time zone is required";
    }
  
    if(!values.zip) {
      errors.zip="Zip is required";
    }
  
    if(!values.zip_code) {
      errors.zip_code="Zip code is required";
    }
  
    if(!values.building_number) {
      errors.building_number="Building number is required";
    }
  
    if(!values.id) {
      errors.id="Id is required";
    }
  
    if(!values.mail_box) {
      errors.mail_box="Mail box is required";
    }
  
    if(!values.postcode){
      errors.postcode="Postcode is required";
    }
  
    if(!values.uid) {
      errors.uid="Uid is required";
    }
    return errors;
  };

  return (
    <div className="form">
      <Modal className="formModal" isOpen={openModal} >
        <div className="formModalDiv">
          {columns.map(column => (
            <div className="formDiv">
              <p className="formText">{column.title}:</p>
              <form onSubmit={(e) => submit(e)}>
                {column.isSelect ?
                  <select onChange={(e) => handle(e, column.name)} value={data.country}>
                    <option>Wybierz kraj</option>
                    <option>Holandia</option>
                    <option>Maroko</option>
                    <option>Niemcy</option>
                    <option>Rosja</option>
                    <option>Wlochy</option>
                    <option>Grecja</option>
                  </select> : column.isNumber ? <input onChange={(e) => handle(e, column.name)} value={data[column.name]} placeholder={column.title} type="number" />
                    : <input onChange={(e) => handle(e, column.name)} value={data[column.name]} placeholder={column.title} type="text" />}
                <button className="SendModalButton">Wyslij</button>
              </form>
            </div>
          ))}
              <div className="validationText">
              <p className="validationText1">{fromErrors.city}</p>
              <p className="validationText2">{fromErrors.city_prefix}</p>
              <p className="validationText3">{fromErrors.city_suffix}</p>
              <p className="validationText4">{fromErrors.community}</p>
              <p className="validationText5">{fromErrors.country}</p>
              <p className="validationText6">{fromErrors.street_address}</p>
              <p className="validationText7">{fromErrors.secondary_address}</p>
              <p className="validationText8">{fromErrors.full_address}</p>
              <p className="validationText9">{fromErrors.country_code}</p>
              <p className="validationText10">{fromErrors.state}</p>
              <p className="validationText11">{fromErrors.state_abbr}</p>
              <p className="validationText12">{fromErrors.street_name}</p>
              <p className="validationText13">{fromErrors.street_suffix}</p>
              <p className="validationText14">{fromErrors.time_zone}</p>
              <p className="validationText15">{fromErrors.zip}</p>
              <p className="validationText16">{fromErrors.zip_code}</p>
              <p className="validationText17">{fromErrors.building_number}</p>
              <p className="validationText18">{fromErrors.id}</p>
              <p className="validationText19">{fromErrors.mail_box}</p>
              <p className="validationText20">{fromErrors.postcode}</p>
              <p className="validationText21">{fromErrors.uid}</p>
            </div>
          <button className="closeModalButton" onClick={() => setCloseModal(false)}>Zamknij</button>
        </div>
      </Modal>
    </div>
  );
}
export default Form;