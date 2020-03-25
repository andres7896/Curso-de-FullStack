function addWorkExperience(id) {
  var form = $('#WorkExperiences')
  $.ajax({
    type: 'POST',
    url: '../WorkExperiences/add.php',
    data: form.serialize(),
    success: function (response) {
      $('#allExperiences').append('<tr id="'+response.company+'" ><td>'+response.company+'</td><td>'+response.city+'</td><td>'+response.workTime+'</td><td>'+response.workPosition+'</td>  </tr>');

    },
    error: function(error) {
      console.error('Error: ', error);
    }
  });
}