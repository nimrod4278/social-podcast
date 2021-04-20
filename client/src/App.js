import React, { Component } from 'react'

import Toolbar from './components/toolbar/Toolbar';
import Feed from './components/feed/Feed';

import './App.css'

class App extends Component {

  render() {

    return (
      <div className="appRoot">
        <Toolbar/>
        <Feed/>

      </div>
    )
  }
}

export default App;
