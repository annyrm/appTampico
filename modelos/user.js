var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var mongoURL = 'mongodb://localhost/semanai'
mongoose.connect(mongoURL, function(err){
	if (err) {console.log(err)}
		console.log('BD correcta')
})

var user_schema = new Schema({
	email: String,
	password: String
})

var User = mongoose.model('User',user_schema)
module.exports.User = User