var fs = require('fs');

fs.appendFile('mynewfile2.txt','Hello this is text!',function(err){
    if(err) throw err;
    console.log('Saved');
});