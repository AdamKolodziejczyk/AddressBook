import axios from "axios";
import React, { useState } from "react";
import Validation from "./validation";
import Modal from 'react-modal'
import './Form.css';


const Form = ({ openModal, setCloseModal, columns }) => {

  const [errors, setErrors] = useState({});
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
      .then(res => {
        console.log(res.data)
      })
  }

  const handle = (e, name) => {
    const newData = { ...data }
    const { value } = e.target
    newData[name] = value;
    setData(newData)
    console.log(newData)
  }


  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(data))
  }

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

                <button className="SendModalButton" >Wyslij</button>
              </form>
            </div>
          ))}
           {errors.city && <p className="validationText">{errors.city}</p>}
          {errors.city_prefix && <p className="validationText">{errors.city_prefix}</p>}
          {errors.city_suffix && <p className="validationText">{errors.city_suffix}</p>}
          {errors.community && <p className="validationText">{errors.community}</p>}
          {errors.country && <p className="validationText">{errors.country}</p>}
          {errors.street_address && <p className="validationText">{errors.street_address}</p>}
          {errors.secondary_address && <p className="validationText">{errors.secondary_address}</p>}
          {errors.full_address && <p className="validationText">{errors.full_address}</p>}
          {errors.country_code && <p className="validationText">{errors.country_code}</p>}
          {errors.state && <p className="validationText">{errors.state}</p>}
          {errors.state_abbr && <p className="validationText">{errors.state_abbr}</p>}
          {errors.street_name && <p className="validationText">{errors.street_name}</p>}
          {errors.street_suffix && <p className="validationText">{errors.street_suffix}</p>}
          {errors.time_zone && <p className="validationText">{errors.time_zone}</p>}
          {errors.zip && <p className="validationText">{errors.zip}</p>}
          {errors.zip_code && <p className="validationText">{errors.zip_code}</p>}
          {errors.building_number && <p className="validationText">{errors.building_number}</p>}
          {errors.id && <p className="validationText">{errors.id}</p>}
          {errors.mail_box && <p className="validationText">{errors.mail_box}</p>}
          {errors.postcode && <p className="validationText">{errors.postcode}</p>}
          {errors.uid && <p className="validationText">{errors.uid}</p>}
          <button className="closeModalButton" onClick={() => setCloseModal(false)}>Zamknij</button>
        </div>
      </Modal>
    </div>
  );
}

export default Form;
