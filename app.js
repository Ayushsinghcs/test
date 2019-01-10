var express = require('express');
var fs = require("fs");
var path= require("path");
var app = express();

app.get('/',(req,res)=>{

             //  fs.readFile('chart_data.json', (err, data) => {
             //  if (err) throw err;
             // let client = JSON.parse(data);
             //  console.log(data[0]);
          //
          // });

  res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(3000,()=>{

console.log("server running");

});
