var http = require('http'); 

http.createServer(function (req, res) {
res.write("[WOLYO] BOT CONNECTED");
res.end();
}).listen(8080);

