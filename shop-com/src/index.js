import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../src/Style/nav.module.css'
import {ChakraProvider} from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './Redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ChakraProvider>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </ChakraProvider>
);


