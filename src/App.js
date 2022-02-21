import React from 'react';
import { useState, useEffect } from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  let [data, setData] = useState(null);
  let [requestParams, setRequest] = useState({});

  const callApi = (requestParams) => {
    // mock output
    data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setData({ data, requestParams });
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} setRequest={setRequest} requestParams={requestParams}/>
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
