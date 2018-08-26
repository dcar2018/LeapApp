var express = require('express');
var app = express();
'use strict';

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('C:/AutoSamples/VisualStudio/LeapdevTest/ExpressApp1/index1.html');
});


app.post('/submit', function (req, res) {
    var totHrs = parseInt(req.body.mon) + parseInt(req.body.tue);
    totHrs += parseInt(req.body.wed) + parseInt(req.body.thu) + parseInt(req.body.fri);
    var salary = parseFloat(req.body.rate) * totHrs;
    totHrs += parseInt(req.body.sat) + parseInt(req.body.sun);
    salary += parseFloat(req.body.rate) * parseInt(req.body.sat) * 1.5;
    salary += parseFloat(req.body.rate) * parseInt(req.body.sun) * 2;
   
    res.write('<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<meta charset="utf-8" />' +
        '<title>Leapdev test</title>' +
        '<style>table, th, td { border: 1px solid black;  border-collapse: collapse;}th, td {padding: 3px;text-align: left; }</style >'+
        '</head>' +
        '<body></br>' +
        '<div id="heading"> <h3>Employee salary details </h3></div></br>' +
        '<table style="width:40%">' +
        '<tr>    <th>Employee name</th>	<th>Total hours</th>	<th>Salary for the week</th></tr><tr>'+
        ' <td id="name"> ' + req.body.name +
        ' </td><td  id="hours">  ' + totHrs +
        ' </td><td id="salary">' + salary +
        ' </tr></table></body>' +
        '</html>');
    res.end();

});



var server = app.listen(5000, function () {
    console.log('Salary calculator..');
});