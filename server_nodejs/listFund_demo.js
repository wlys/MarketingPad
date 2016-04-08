/**
 * Created by xuhanmeng on 16/3/29.
 */
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listFunds', function (req, res) {
	   fs.readFile( __dirname + "/" + "fund.json", 'utf-8', function (err, data) {
		          console.log( data );
				         res.end( data );
						    });
})

var server = app.listen(80, function () {

	  var host = server.address().address
	  var port = server.address().port

	  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
