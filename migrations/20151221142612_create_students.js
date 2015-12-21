
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(table){
    table.increments();
    table.string('name');
    table.string('last');
    table.string('dob');
    table.string('email');
  });
};

exports.down = function(knex, Promise) {

};
