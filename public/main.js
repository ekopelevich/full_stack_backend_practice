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
  console.log('here')
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
