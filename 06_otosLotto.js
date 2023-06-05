var http = require('http');

var otosLottoModul = require('./06_otosLottoModul.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});     
    res.write("\n");
    res.write("Az ötöslottó számai: "+otosLottoModul.getOtosLottoGeneral());
    res.end();
}).listen(3000);