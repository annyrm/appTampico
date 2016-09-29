var express = require('express');
var User = require('../modelos/user').User

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api',function(req, res,next){
	User.find(function(err,docs){
		res.send(docs)
	})
})

router.get('/api/:id',function(req, res,next){
	User.findOne({_id:req.params.id},function(err,docs){
		res.send(docs)
	})
})

router.get('/registro', function(req, res, next){
	res.render('new',{title: 'Registro de Nuevo'})
})

router.post('/registro', function(req, res, next){
	var user = new User({
		email: req.body.email,
		password: req.body.password
	})
	user.save().then(function(err){
		if (err) {console.log(err)}
			res.redirect('/api')
	})
})


module.exports = router;
