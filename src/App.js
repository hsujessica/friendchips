import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './App.css';
import Nav from './Nav';
import Bulletin from './Bulletin';
import Form from './Form';

const config = {
  apiKey: 'AIzaSyAdon1Dqyfqd4GG6UVvPzJ3HZ_u7UGH-eA',
  authDomain: 'hmh19-5278b.firebaseapp.com',
  databaseURL: 'https://hmh19-5278b.firebaseio.com',
  projectId: 'hmh19-5278b',
  storageBucket: 'hmh19-5278b.appspot.com',
  messagingSenderId: '551704589105'
};
firebase.initializeApp(config);

export const db = firebase.firestore();

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <StyledFirebaseAuth firebaseAuth={firebase.auth()} />
        <Form />
        <Bulletin />
      </div>
    );
  }
}
