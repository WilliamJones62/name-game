import React, { Component } from 'react';
import './App.css';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div>
          <button> Play </button>
          <button> Mat* </button>
          <button> Reverse </button>
          <button> Hint </button>
          <button> Begins </button>
          <input type="text" id="myText"></input>
      </div>
    );
  }
}

export default App;
