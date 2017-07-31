import React, { Component } from 'react';
import './App.css';
import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      myPeeps: []
    };
  }

  componentDidMount() {
    getPeople().then((people) =>
        this.setState({
            people
        }));
  }

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

function getPeople() {
    return new Promise((resolve, reject) => {
        fetch('https://willowtreeapps.com/api/v1.0/profiles/').then(function(response) {
            if (response.status !== 200) {
                reject(new Error("Error!"));
            }
            response.json().then((imageList) => {
                resolve(imageList);
            });
        });
    });
}

export default App;
