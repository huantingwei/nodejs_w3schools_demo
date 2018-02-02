var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'HUAN TING WEI',
    password:'ting10332019'
});

con.connect(function(err){
    if (err) throw err;
    console.log('Connected!');
});