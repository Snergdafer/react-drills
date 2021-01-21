import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      colors: ["blue", "orange", "green", "red", "maroon", "black"],
      userInput: ''
    }
  }

  updateInput(input) {
    this.setState({userInput: input})
  }

  render() {
    let displayArray = this.state.colors
      .filter((elem) => {
        return elem.includes(this.state.userInput)
      })
      .map((elem, i) => {
        return <h2 key={i}>{elem}</h2>
      })

    return (
      <div className="App">
        <input onChange={e => this.updateInput(e.target.value)} type="text"/>
        {displayArray}
      </div>
    );
  }
}

export default App;
