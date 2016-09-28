var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var mongoURL = 'mongodb://anarmz:131115@ds041496.mlab.com:41496/heroku_p6w2nc3s'
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