import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contents: '',
    apple: '',
    watermelon:'',
    orange: ''
  }

  // fetchUrl = (url) =>{
  // 	return new Promise((res) => {
  // 		httpRequest(url,function(responseText){
  // 			let target = responseText.target;
  // 			if(target.readyState === 4 && target.status === 200){
  // 				res(target)
  // 			}
  // 		})
  // 	})
  // }

  componentDidMount() {
      this.setState({
        watermelon: '🍉' + '🍉'.charCodeAt() + Math.random(0,10),
        apple: '🍎'
      })
  }

  componentWillMount() {
    // setInterval(() => {
    //   this.setState({
    //     apple: '🍎' + '🍎'.charCodeAt() + Math.random(0,10)
    //   })
    //   this.setState({
    //     watermelon: '🍉' + '🍉'.charCodeAt() + Math.random(0,10)
    //   })
    //   this.setState({
    //     orange: '🍊' + '🍊'.charCodeAt() + Math.random(0,10)
    //   })
    // },5000)
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
