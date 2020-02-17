//utilizando expressa para retornar uma view estática
//adicionando um novo registro na tabela do sequelize
//
var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 4567;

const { SMC_USERS } = require('./app/models');
SMC_USERS.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.use(methodOverride());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ 
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.use(errorHandler({
    dumpExceptions: true,
    showStack: true// trueo compressor.io
}));

app.get("/", function(req, res) {
    
    

    res.redirect("/index.html");

});

console.log("Simple server listening at http://" + hostname + ":" + port);

app.listen(port, hostname);