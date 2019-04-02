import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


// window.zj = React.createElement('div','','浙江');
// let hz = React.createElement('div','','杭州');
// window.reactDOM = React.createElement('h1',{text:'爱我中华🇨🇳'},zj,hz);


class Hello extends React.Component{
	state = {
		num: 0
	}
	componentDidMount(){
		window.hello = this;
		var i = 0;
		setInterval(() => {
			this.setState({
				num: ++i
			})
		},3000)
	}


	render(){
		return <h2>hello china 🇨🇳,{this.state.num}</h2>
	}
}

function App(props){
	return <div>{props.txt}</div>
}

ReactDOM.render(
	<Hello />,
	document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
