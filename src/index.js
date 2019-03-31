import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
	<App />,
	document.getElementById('root')
);
document.addEventListener("DOMContentLoaded", function(event) {
		console.log("DOM fully loaded and parsed");
});

for(var i=0; i<10000000000; i++){
		// 这个同步脚本将延迟DOM的解析。
		// 所以DOMContentLoaded事件稍后将启动。
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
