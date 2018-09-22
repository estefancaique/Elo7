var db = require('../db_config.js');

exports.list = function(callback){

	db.Deploy.find({}, function(error, deploy) {

		if(error) {

			callback({error: 'Não foi possivel retornar os usuarios'});
		} else {

			callback(deploy);
		}
	});
};

exports.deploy = function(id, callback) {

	db.Deploy.findById(id, function(error, deploy) {

		if(error) {

			callback({error: 'Não foi possivel retornar o usuario'});
		} else {

			callback(deploy);
		}
	});
};

exports.save = function(Componente, Versao, Responsavel, Status,  callback){

	new db.Deploy({

		'Componente': Componente,
		'Versao': Versao,
		'Responsavel': Responsavel,
		'Status': Status,
		'created_at': new Date()
	}).save(function(error, deploy) {

		if(error) {

			callback({error: 'Não foi possivel salvar o usuario'});
		} else {

			callback(deploy);
		}
	});
};

