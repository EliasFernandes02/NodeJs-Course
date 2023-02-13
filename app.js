
var http = require("http");

http.createServer(function(req,res) {
console.log("meu servidor esta rodando")
res.end('<h1>Sai daqui cara<h1> <h4>Servidor e meu<h4>');
}).listen(8181);

console.log("meu servidor esta rodando")