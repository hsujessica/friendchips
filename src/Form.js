import React, { Component } from 'react';
import firebase from 'firebase';
import { db } from './App';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      deadline: '',
      need: '',
      postedAt: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit() {
    const user = await firebase.auth();
    try {
      const post = await db
        .collection('posts')
        .doc()
        .set({
          user: user.uid,
          deadline: this.state.deadline,
          need: this.state.need,
          postedAt: new Date()
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <form className="form">
        <div className="input-item">
          <label>What do you need? </label>
          <input label="item" name="item" onChange={this.handleChange} />
        </div>
        <div className="input-item">
          <label>When do you need it by? </label>
          <input
            label="deadline"
            name="deadline"
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit} className="btn-primary">
          Post
        </button>
      </form>
    );
  }
}
