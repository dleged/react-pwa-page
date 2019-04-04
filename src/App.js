import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contents: '',
    apple: '',
    watermelon:'',
    orange: ''
  }


  componentDidMount() {
      this.setState({
        watermelon: '🍉' + '🍉'.charCodeAt() + Math.random(0,10),
        apple: '🍎'
      })
  }

  render() {
    let {apple,watermelon,orange}  = this.state;
    return (
      <div className="App">
        🇨🇳
        ,
        {apple}
      </div>
    );
  }
}

export default App;
