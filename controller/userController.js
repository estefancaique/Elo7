var db = require('../db_config.js');

exports.list = function(callback){

	db.Deploy.find({}, function(error, deploy) {

		if(error) {

			callback({error: 'Não foi possivel retornar os Deploy'});
		} else {

			callback(deploy);
		}
	});
};

exports.deploy = function(id, callback) {

	db.Deploy.findById(id, function(error, deploy) {

		if(error) {

			callback({error: 'Não foi possivel retornar o Id do Deploy'});
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
		'Data': new Date()
	}).save(function(error, deploy) {

		if(error) {

			callback({error: 'Não foi possivel gravar o Deploy'});
		} else {

			callback(deploy);
		}
	});
};

