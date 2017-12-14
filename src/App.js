import React, { Component } from 'react';
import Canvas from './containers/Canvas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is part of the App</h1>
        <Canvas />
      </div>
    );
  }
}

export default App;
