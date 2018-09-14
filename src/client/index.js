import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getSensor } from './api';

ReactDOM.render(<App />, document.getElementById('root'));

getSensor().subscribe({
  next: (data) => {
      console.log('Got sensor readings:', data);
  },
})
