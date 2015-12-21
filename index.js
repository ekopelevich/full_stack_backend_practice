var express = require('express');
var app = express();
//var pg = require('pg');
// var knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host     : '127.0.0.1',
//     user     : 'regly_app',
//     password : 'regly_password',
//     database : 'regly'
//   }
// });

var cors = require('cors');
//var bodyParser = require('body-parser');

var students = [{
  id: 1,
  name: 'Elana',
  last: 'Kopelevich',
  dob: '1984-06-28'
},
{
  id: 2,
  name: 'Axel',
  last: 'Rose',
  dob: '1964-06-28'
}
];

app.use(cors());
// app.use(knex()('knexfile'));
//app.use(bodyParser());

// List all students
app.get('/students', function ( req, res ) {
  // knex('students').select()
  // .then(function(students){
  //   res.send({students: students});
  // });
  res.send({students: students});
});

// Read student by id
app.get('/students/:id', function( req, res ) {
  // knex('students').select().where('id', request.params.id)
  // .then(function(students){
  //   res.send( {students: students[req.params.id -1]} );
  // });
  res.send( {students: students[req.params.id -1]} );
});

// Create a new student
app.post('/students', function( req, res ) {
  // Post
});

app.listen(8000, function(){
  console.log('Listening on port 8000');
});
