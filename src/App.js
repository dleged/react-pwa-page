import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    contents: ''
  }

  httpRequest = (url,callback) => {
    let xhr = this.hre || new XMLHttpRequest();
    xhr.onload = callback;
    xhr.open('get',url);
    xhr.send();
  }

  fetchUrl = (url) =>{
    return new Promise((res) => {
      this.httpRequest(url,function(responseText){
        let target = responseText.target;
        if(target.readyState === 4 && target.status === 200){
          res(target)
        }
      })
    })
  }

  componentDidMount() {
    this.fetchUrl('www.npmjs.com/package/npm-run-all').then((responseText) => {
      this.setState({
        contents: responseText.responseText
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          {this.state.contents}
        </div>
      </div>
    );
  }
}

export default App;
