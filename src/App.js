import React, { Component } from 'react';
import './App.css';
import './styles.css';

class Face extends Component {

    constructor() {
      super();
      this.state = {
        clicked: false
      };
    }

    onClick() {
          this.setState({clicked: true});
    }

    render() {
        let classes = React.addons.classSet({
            'name': true,
            'hidden': !this.state.clicked,
            'right': this.state.clicked && this.props.selected,
            'wrong': this.state.clicked && !this.props.selected
        });

        return (
            <article className="employee" onClick={this.onClick}>
                <img src={ this.props.url } />
                <span className={classes}>
                    <h2>{this.props.name}</h2>
                </span>
            </article>
        );
    }
};

class Game extends Component {

    render() {
      var faces = this.props.people.map(function(p) {
          return <Face key={Math.random()} url={'http:' + p.headshot.url} name={p.firstName + ' ' + p.lastName} selected={p.selected}/>;
      });

      var selectedFace = this.props.people.find(function (o) { return o.selected; });
      return (
        <div>
          <h1 id="question-wrapper">Who is {selectedFace.firstName + ' ' + selectedFace.lastName}?</h1>
          <div>{faces}</div>
        </div>
      );
    }
  }

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
    let game;
    if (this.state.people.length) {
        game = <Game people={this.state.people} />;
    }
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
