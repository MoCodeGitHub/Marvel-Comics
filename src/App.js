import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';

class App extends Component {
  getComic = (e) => {
    const comicName = e.target.elements.comicName.value;
    e.preventDefault();
    console.log("comicName");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
                  <h1 className="App-title">Marvel Comics Directory</h1>
        </header>

        <Search getComic={this.getComic} />
      </div>
    );
  }
}

export default App;
