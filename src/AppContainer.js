import React from 'react';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';
const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects

class AppContainer extends React.Component {

  componentWillMount() {
    this.checkForSavedAuth();
  }

  constructor() {
    super();
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
    this.db = firebase.firestore();
    this.state = {
      user: null
    };
  }

  render() {
    if(this.state.user)
      return <DashboardComponent user={this.state.user}></DashboardComponent>
    else
      return <SignupComponent loginFn={this.loggedIn}></SignupComponent>
  }

  checkForSavedAuth = () => {
    console.log(firebase.auth().currentUser);
  };

  loggedIn = (user) => this.setState({ user: user });

}

export default AppContainer;
