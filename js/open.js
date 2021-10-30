const http = require('http');
const url = require('url');
var output = require('./out');

__dirname = "/ahack/public/"


http.createServer(function (req, res) {
	var out = new output(res);

	out.file("html_head.html");


	const url_webpage = url.parse(req.url,true).pathname;

	out.string(url_webpage);

	out.file("html_bottom.html");
	out.send();
}).listen(8080);