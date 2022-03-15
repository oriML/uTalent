import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/store'

import App from './App';
// import { StyledEngineProvider } from '@mui/material/styles';
// import { StyledEngineProvider } from '@mui/styled-engine-sc'

ReactDOM.render(
  <React.StrictMode>

    {/* <StyledEngineProvider injectFirst> */}

      <Provider store={store} >

        <Router>

          <App />

        </Router>

      </Provider>

    {/* </StyledEngineProvider> */}

  </React.StrictMode>,
  document.getElementById('root')
);

