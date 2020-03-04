import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyAJjC4YeETWGsgufHNVi7s0CrDBs79fS04",
     authDomain: "my-chat-c8d73.firebaseapp.com",
     databaseURL: "https://my-chat-c8d73.firebaseio.com",
     projectId: "my-chat-c8d73",
     storageBucket: "my-chat-c8d73.appspot.com",
     messagingSenderId: "851310824282",
     appId: "1:851310824282:web:397bea69e6e22b60470163",
     measurementId: "G-23L8GRXW9J"
});

const routing = (
  <BrowserRouter>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
      <Redirect to='/login' />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
