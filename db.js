var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '35.184.227.103',
  user     : 'root',
  password : 'abc123',
  database : 'uaac'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

app.get("/",function(req,res){
connection.query('SELECT * FROM ANIMAL', function(err, rows, fields) {
connection.end();
  if (!err)
    res.send(rows);
  else
    console.log('Error while performing Query.');
  });
});

app.listen(3000);
