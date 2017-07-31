import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      personList: [],
      visiblePersonList: []
    };
  }

  componentDidMount() {
    getPersonList().then((personList) =>
        this.setState({
            personList,
            visiblePersonList: personList
        }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

function getPersonList() {
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
