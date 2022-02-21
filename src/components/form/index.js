import React from 'react';
import { useState, useEffect } from 'react';
import './form.scss';

function Form(props) {

  // let [form, setForm] = useState({});

  const handleSubmit = e => {
    e.preventDefault();

    const formData = { ...props.requestParams };
    //   method: 'GET',
    //   url: 'https://pokeapi.co/api/v2/pokemon',

    props.handleApiCall(formData);
  }

  const handleUrlChange = (e) => {
    let { name, value } = e.target;
    props.setRequest((prevRequest) => ({ ...prevRequest, [name]: value }));
  }

  const handleMethodChange = (e) => {
    let { value } = e.target;
    props.setRequest((prevRequest) => ({...prevRequest, method: value}));
  }

  // const handleFormChange = () => {

  // }

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
          <input name='url' type='text' onChange={handleUrlChange} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleMethodChange}>GET</span>
          <span id="post" onClick={handleMethodChange}>POST</span>
          <span id="put" onClick={handleMethodChange}>PUT</span>
          <span id="delete" onClick={handleMethodChange}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
