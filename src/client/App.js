import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import { getVersion, getSensor, getPower } from './api';

export default class App extends Component {
  state = {
    version: '???',
    heading: 0,
    distance: 0,
    voltage: 0,
    current: 0,
    power: 0,
  };

  constructor() {
    super();
    this.update = this.update.bind(this)
    console.log('binded this.setState');
  }

  update() {
    getVersion().subscribe({
      next: (version) => {
        console.log('fetched version:', version);
        this.setState(version);
      },
      error: (err) => {
        console.error('failed to fetch version:', err);
      }
    })
    getSensor().subscribe({
      next: (sensor) => {
        console.log('fetched sensor:', sensor);
        this.setState(sensor);
      },
      error: (err) => {
        console.error('failed to fetch sensor:', err);
      }
    })
    getPower().subscribe({
      next: (data) => {
        console.log('fetched power:', data);
        this.setState({
          voltage: data.V,
          current: data.I,
          power: data.P,
        });
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
        <h1>{this.state.version}</h1>
        <h1>Sensor Readings</h1>
        <div>
          <p>Heading:  {this.state.heading}</p>
          <p>Distance: {this.state.distance}</p>
        </div>
        <h1>Drive Pattern</h1>
        <div>
        </div>
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
