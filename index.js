const express = require("express");
const app = express();

app.get("/",function(req,res) {
    res.send("<h1>Olar mundo</h1>")
})

//parametro nao obrigatorio
app.get("/blog/:artigo?",function(req,res) {
    var artigo = req.params.artigo

    if(artigo) {
        res.send(" Artigo: " + artigo)
    } else {
        res.send("<h1>Meu blog</h1>")
    }
    
})

app.get("/ola/:nome/:empresa",function(req,res) {
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Ola " + nome + " da " + empresa + "</h1>")
})



app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    } else {
        console.log("Servidor iniciado com sucesso na porta 4000")
    }
})