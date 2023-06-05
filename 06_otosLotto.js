var http = require('http');

var lottoFeladatModulok = require('./06_lottoFeladatModulok.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});     
    res.write("\n");
    res.write("Az ötöslottó számai: "+lottoFeladatModulok.getOtosLotto());
    res.end();
}).listen(3000);