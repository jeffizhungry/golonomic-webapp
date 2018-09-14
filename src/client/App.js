import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import { getSensor } from './api';

export default class App extends Component {
  state = {
    heading: 999,
    distance: 999
  };

  constructor() {
    super();
    this.update = this.update.bind(this)
    console.log('binded this.setState');
  }

  update() {
    getSensor().subscribe({
      next: (sensor) => {
        console.log('fetched sensor:', sensor);
        this.setState(sensor);
      },
      error: (err) => {
        console.error('failed to fetch sensor:', err);
      }
    })
  }

  componentDidMount() {
    this.update()
    setInterval(this.update, 500);
  }

  render() {
    return (
      <div>
        <h1>Sensor Readings</h1>
        <p>Heading:  {this.state.heading}</p>
        <p>Distance: {this.state.distance}</p>
      </div>
    );
  }

  // render() {
  //   const { username } = this.state;
  //   return (
  //     <div>
  //       {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
  //       <img src={ReactImage} alt="react" />
  //     </div>
  //   );
  // }
}
