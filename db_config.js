var db_string= 'mongodb://127.0.0.1/elo7';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

db.once('open', function() {

	var userSchema = mongoose.Schema({

		Componente: String,
		Versao: String,
		Responsavel: String,
		Status: String,
		Data: Date
	});

	exports.Deploy = mongoose.model('Deploy', userSchema);
});
