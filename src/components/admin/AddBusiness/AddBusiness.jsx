import React, { useState } from 'react';
import { newCollection } from '../../../firebase/funciones';
import { useStore } from 'react-redux';
import './AddBusiness.css';

const AddBusiness = ({ setShowInput }) => {
  const [business, setBusiness] = useState('');
  const { getState } = useStore();
  const { uid } = getState().auth;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(business);
    newCollection('business', {
      name: business,
      date: new Date(),
      idUser: uid,
    });
    setShowInput(false);
  };

  const handleChange = (e) => {
    setBusiness(e.target.value);
  };

  return (
    <div className="row">
      <form className="input-field col s5" onSubmit={handleSubmit}>
        <input
          type="text"
          id="autocomplete-input"
          className="autocomplete"
          onChange={handleChange}
          autoFocus
        />
        <label htmlFor="autocomplete-input">Add Project</label>
      </form>
      <div className="col s4">
        <i
          className="fas fa-times red-text"
          onClick={() => setShowInput(false)}
        ></i>
      </div>
    </div>
  );
};

export default AddBusiness;

/* 
<div className="add-business">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} autoFocus />
        <span onClick={() => setShowInput(false)}>X</span>
      </form>
    </div> */
