var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var studentsRoute = require('./routes/students');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/students', studentsRoute);

// var students = [{
//   id: 1,
//   name: 'Elana',
//   last: 'Kopelevich',
//   dob: '1984-06-28'
// },
// {
//   id: 2,
//   name: 'Axel',
//   last: 'Rose',
//   dob: '1964-06-28'
// }
// ];

app.listen(8000, function(){
  console.log('Listening on port 8000');
});
