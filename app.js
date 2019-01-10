var express = require('express');
var fs = require("fs");
var path= require("path");
var app = express();


const port=Number(process.env.PORT || 3000);

app.get('/',(req,res)=>{

             //  fs.readFile('chart_data.json', (err, data) => {
             //  if (err) throw err;
             // let client = JSON.parse(data);
             //  console.log(data[0]);
          //
          // });

  res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(port,()=>{

console.log("server running");

});
