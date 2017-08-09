import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fetch('https://willowtreeapps.com/api/v1.0/profiles/')
  .then(response => response.json())
  .catch(e => console.log('error', e));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
