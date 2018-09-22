var app = require('./app_config.js');

var userController = require('./controller/userController.js');

var validator = require('validator');

var mongoexport = require('mongoexport-wrapper');

app.get('/', function(req, res) {

	res.end('Sistema OK!');
});

app.get('/deploy', function(req, res) {

	userController.list(function(resp) {

		res.json(resp);
	});
});

app.get('/deploy/export', function(req, res) {

     var opt = {
              host : '127.0.0.1:27017',
              db : 'elo7',
              collection :'deploys',
              fields : "_id,Componente,Versao,Responsavel,Status,created_at",
              out : 'deploys.csv',
              type : 'csv'
          };
		  
		   mongoexport(opt,(error,resul)=>{
		   var file = __dirname + '/deploys.csv';
		   if(error) console.log(error);
		   else res.download(file);		        
		});
});

app.get('/deploy/:id', function(req, res) {

	var id = validator.trim(validator.escape(req.param('id')));

	userController.user(id, function(resp) {

		res.json(resp);
	});
});

app.post('/deploy', function(req, res) {

	var Componente = validator.trim(validator.escape(req.param('Componente')));
	var Versao = validator.trim(validator.escape(req.param('Versao')));
	var Responsavel = validator.trim(validator.escape(req.param('Responsavel')));
	var Status = validator.trim(validator.escape(req.param('Status')));

	userController.save(Componente, Versao, Responsavel, Status, function(resp) {

		res.json(resp);
	});
});
