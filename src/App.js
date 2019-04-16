import React, { Component } from 'react';
import * as constant from './Utility/Constant';
import logo from './logo.svg';
import NewsList from './Views/NewsList';


class App extends Component {
  render() {
    return (
      <NewsList/>
    );
  }
}

export default App;
