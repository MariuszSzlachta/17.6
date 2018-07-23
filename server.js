var express = require('express');
var app = express();
app.use(express.static('./views/assets/'));
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
  res.render('site');
});

app.get('/auth/google', function(req, res) {
  res.render('content', {username: req.query.username});
});


app.listen(3000);
  
app.use(function(req, res, next){
  console.log('404');
  res.status(404).send('Sorry but we couldn\'t find what you need');
});