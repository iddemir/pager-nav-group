import React, { Component } from 'react';
import './App.css';
import PagerNavGroup from './components/PagerNavGroup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 5
    };
  }
  render() {
    return (
      <PagerNavGroup
        totalPage={20}
        activePage={this.state.activePage}
        onChange={activePage => this.setState({ activePage })}
      />
    );
  }
}

export default App;
