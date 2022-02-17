import React from 'react';
import { useState, useEffect } from 'react';
import './form.scss';

function Form(props) {

  let [form, setForm] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    
    const formData = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  }
  
  useEffect(() => {
    // returning a function causes this to run on un-mount
    return () => {
      console.log('form removed from DOM');
    }
  });



  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
