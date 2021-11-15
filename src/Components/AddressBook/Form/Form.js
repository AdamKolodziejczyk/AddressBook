import React, { useState } from "react";
import Modal from 'react-modal'

import './Form.css';


const Form = ({ openModal, setCloseModal, columns }) => {





  return (
    <div className="form">
      <Modal className="addressBookModalBox" isOpen={openModal} >
        <div className="addressBookModal">
                {columns.map(column => (
                  <div className="addressBookColumnDiv">
                    <p className="cardsColumnText1">{column.title}:</p>
                     <p><input /></p>
                  </div>
                ))}
          <button className="closeModalButton1" onClick={() => setCloseModal(false)}>Zamknij</button>
          <button className="closeModalButton2">Wyslij</button>
        </div>
      </Modal>
    </div>
  );
}

export default Form;
