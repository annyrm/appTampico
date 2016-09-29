var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var mongoURL = 'mongodb://anarmz:131115@ds041496.mlab.com:41496/heroku_p6w2nc3s'
mongoose.connect(mongoURL, function(err){
	if (err) {console.log(err)}
		console.log('BD correcta')
})

var sitios_schema = new Schema({
	idsitio: String,
	nombre: String,
	descripcion: String,
	latitud: String,
	longitud: String,
	tipo: String,
	ciudad: String,
	servicios: String,
	direccion: String,
	imgurl: String
})

var Sitios = mongoose.model('Sitios',sitios_schema)
module.exports.Sitios = Sitios