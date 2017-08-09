import React, { Component } from 'react';
import './App.css';
import './styles.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
      myPeeps: []
    };
  }

  componentDidMount() {
    fetch('https://willowtreeapps.com/api/v1.0/profiles/')
      .then(response => response.json())
      .then(data => this.setState({ people: data.items }))
      .catch(e => console.log('error', e));
  };

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
