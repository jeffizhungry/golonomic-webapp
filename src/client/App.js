import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import { getUsername } from './api';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    getUsername().subscribe((user) => {
      this.setState({ username: user.username });
    })
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
