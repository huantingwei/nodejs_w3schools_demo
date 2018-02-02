var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'WEI HUAN TING',
    password:'ting10332019'
});

con.connect(function(err){
    if (err) throw err;
    console.log('Connected!');
    con.query("CREATE DATABASE mydb",function(err,result){
        if(err) throw err;
        console.log('Database created!');
    });
});