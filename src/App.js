import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    increment: 0
  }
  
  render() {
    const { increment } = this.state
    return (
      <div>
        <span className="value">{increment}</span>
        <button id="inc" onClick={() => this.setState({increment: increment + 1})}>Incrementa</button>
      </div>
    );
  }
}

export default App;
