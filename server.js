var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
//serve static files
app.use(express.static(__dirname + '/public'));

//default get path
app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
})
//get path for templates
app.get('/templates/:name', function(req, res){
  var name = req.params.name;
  console.log('requested', name)
  res.sendFile(__dirname  + '/views/templates/' + name + '.html');
})
app.listen(3000, function(){
  console.log('listening on 3k')
});
