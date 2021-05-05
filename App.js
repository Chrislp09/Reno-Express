import React, { Component } from 'react';
import AppLayout from './src/App';

class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <AppLayout />
    )
  }
}

export default App;