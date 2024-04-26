import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter } from "react-router-dom";
//import { ThemeProvider } from '@aws-amplify/ui-react';
//import {theme} from "./theme";

//connected with aws amplify library
//import { awsExports } from "./aws-exports";
//import { Amplify } from "aws-amplify";
//Amplify.configure(awsExports);

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
)
