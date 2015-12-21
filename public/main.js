$(document).ready(function(){
  getStudentData().then(function( studentData ){
    var studentList = buildStudentList( studentData.students );
    console.log( studentList );
    renderStudentList( studentList );
  }).catch(function(error){
    console.log( 'Couldn\'t get student data', error );
  });
});

function buildStudentList( studentData ){
  return studentData.map( function( student, index ){
    return convertStudentObjectToListItem( student );
  });
}

function convertStudentObjectToListItem( student ){
  //console.log( student );
  var studentListItem = document.createElement('li');

  var studentNameContainer = document.createElement('p');
  var studentName = document.createTextNode([ student.name, student.last]);
  studentNameContainer.appendChild( studentName );

  var studentDOBContainer = document.createElement('p');
  studentDOB = document.createTextNode( student.dob );
  studentDOBContainer.appendChild( studentDOB );

  var studentEmailContainer = document.createElement('p');
  var studentEmail = document.createTextNode( student.email );
  studentEmailContainer.appendChild( studentEmail );

  studentListItem.appendChild( studentNameContainer );
  studentListItem.appendChild( studentDOBContainer );
  studentListItem.appendChild( studentEmailContainer );

  return studentListItem;
}

function renderStudentList( studentList ){
  $('.g-student-list').append( studentList );
}

function getStudentData(){
  return new Promise( function( resolve, reject ){
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8000/students',
      success: resolve,
      error: reject
    });
  });
}

function attachNewStudentData(){
  $('.g-new-student-form').submit(function( event ){
    event.preventDefault();
    var formData = getNewStudentData($( this ));
    createNewStudent(formData).then(function(){})
    .catch(function(error){
      console.error('Unable to add student.', error);
    });
  });
}

function getNewStudentData( form ){
  var formValues = form.serializeArray();
  // Kyle changed his mind about this method
  // var studentData = {
  //   name: formValues[0].name,
  //   last: formValues[1].last,
  //   dob: formValues[0].dob,
  //   email: formValues[0].email
  // }
  return formValues.reduce(function( formattedStudent, student ){
    formattedStudent[student.name] = student.value;
    return formattedStudent;
  }, {});
}

function createNewStudent(){
  return new Promise( function( resolve, reject) {
      $.ajax({
      method: 'post',
      url: 'http://localhost:8000/students',
      success: resolve,
      error: reject
    });
  });
}
