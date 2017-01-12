var express = require('express'),
    app = express();

//serve static files
app.use(express.static(__dirname + '/public'));

//default get path
app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
})
app.listen(3000, function(){
  console.log('listening on 3k')
});
