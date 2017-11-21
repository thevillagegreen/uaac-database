var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '35.184.227.103',
  user     : 'root',
  password : 'abc123',
  database : 'uaac'
});

connection.connect();

connection.query('SELECT * FROM ANIMAL', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();
