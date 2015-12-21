var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    database : 'regly'
  }
});

// List all students
router.get('/', function ( req, res ) {
  knex('students').select()
  .then(function(students){
    res.status(200).send({students: students});
  });
});

// Read student by id
router.get('/:id', function( req, res ) {
  knex('students').select().where('id', request.params.id)
  .then(function(students){
    res.status(200).send({students: students});
  });
});

// Create a new student
router.post('/', function( req, res ) {
  knex('student').insert({
    name: req.body.name,
    last: req.body.last,
    dob: req.body.dob,
    email: req.body.email
  }, 'id').then(function(id){
    req.body.id = id[0];
    res.status(201).send(req.body);
  });
});

module.exports = router;
