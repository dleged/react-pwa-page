import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import httpRequest from './utils/request.js';

class App extends Component {
  state = {
    contents: ''
  }

  fetchUrl = (url) =>{
  	return new Promise((res) => {
  		httpRequest(url,function(responseText){
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

  componentWillMount() {
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
        <pre>
          {this.state.contents}
        </pre>
      </div>
    );
  }
}

export default App;
