let num = 1;

const httpRequest = (url,callback) => {
	let xhr = new XMLHttpRequest();
	xhr.onload = callback;
	xhr.open('get',url);
	xhr.send();
	num ++;
	console.log(num,'num');
	window['xhr' + Math.floor(Math.random(0,1)*100)] = xhr;
}

export default httpRequest;
