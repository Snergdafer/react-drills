import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
        userInput: ''
    }

  }

updateInput(value) {
    this.setState({
        userInput: value
    })
}

render() {
    return(
        <div>
          <input 
            onChange={e => this.updateInput(e.target.value)}
            type="text"
          />

          <p>{this.state.userInput}</p>
        </div>
    )
}
}

export default App;
