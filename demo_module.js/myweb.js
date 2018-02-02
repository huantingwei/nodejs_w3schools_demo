var http = require('http');
var dt = require('./myfirstmodule');
// "./" to locate the module. the module is located in the same folder as the Node.js file

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! How are you?');
    res.write(req.url);
    res.write('The date and time are: '+dt.myDateTime());
    res.end();
}).listen(8080);