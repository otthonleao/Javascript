let xhttpGet = new XMLHttpRequest();

xhttpGet.open('GET', 'https://httpbin.org/ip', true);
xhttpGet.send();

/* REQUEST */
let xhttp = new XMLHttpRequest();

xhttp.open('POST', 'https://httpbin.org/post', true);
xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhttp.send('name=Leonan&age=21');

/* RESPONSE */
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		console.log(JSON.parse(this.responseText));
	}
}
