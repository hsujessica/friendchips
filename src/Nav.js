import React from 'react';
import firebase from 'firebase';
const provider = new firebase.auth.GoogleAuthProvider();

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {}
    };
    this.handleClick.bind(this);
  }
  handleClick() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
        this.setState({ loggedIn: true, user: result.user });
      })
      .catch(function(error) {
        console.log(error, 'woops, error');
      });
  }
  render() {
    return (
      <header className="header">
        <button className="btn-primary" onClick={this.handleClick}>
          Login to post
        </button>
        {/* <p>Your neighbors are busy bees, so chip in!</p> */}
        <div className="logo-desc">
          <img src="FriendChips_Color.jpg" alt="Friendchips" className="logo" />
          <p>
            There are good chips, and wood chips, chips that sail the sea, but
            the best chips are friendchips, and may they always be.
          </p>
        </div>
      </header>
    );
  }
}
