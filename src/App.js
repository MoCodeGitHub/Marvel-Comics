import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
                  <h1 className="App-title">Marvel Comics Directory</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
