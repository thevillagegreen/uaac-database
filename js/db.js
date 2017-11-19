var sql = require('mssql');

var config = {
    user: 'root',
    password: 'abc123',
    server: '35.184.227.103',
    database: 'uaac',
    port: 3000
};

function getEmp() {
    var conn = new sql.Connection(dbConfig);
    var req = new sql.Request(conn);

    conn.connect(function(err) {
        if(err) {
            console.log(err);
            return;
        }
    else {
        console.log('success');
    }
});
}

getEmp();

// // connect to your database
// sql.connect(config, function (err) {
//
//     if (err) console.log(err);
//
//     // create Request object
//     var request = new sql.Request();
//
//     // query to the database and get the records
//     request.query('select * from Animal', function (err, recordset) {
//
//         if (err) console.log(err)
//
//         // send records as a response
//         res.send(recordset);
//
//     });
// });
