import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: ["Little Timmy ", "BJ Helmsworth ", "Arnor Shmortsineggerr ", "Regeneld Furgunsburgur "]

    }
  }


  



  render() {
    let listo = this.state.arr.map((elem, i) => {

      return <span key={i}>{elem}</span>

    })

    return (
       <div className="App">
         {listo}
      </div>
    );
  }
}
export default App;
