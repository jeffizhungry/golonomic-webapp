import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getUsername } from './api';

ReactDOM.render(<App />, document.getElementById('root'));

getUsername().subscribe((data) => {
  console.log('Subscribed', data);
});
