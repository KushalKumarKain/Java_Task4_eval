$(document).ready(function(){

  $('.check2').attr('disabled', true);

  $('#check1').change(function() {
    $('.check2').attr('disabled', !this.checked);
  });

  $('.day').attr('disabled',true);

  $('.check2').change(function(){
    $('.day').attr('disabled', !this.checked);
  });

  $("#form").validate({
    errorPlacement: function( error, element ) {
      error.appendTo(element.parents('#container'));
      },
    rules:{
      f_name :{
        required: true,
        lettersonly : true
      },

      age_1:{
        required : true,
      },

      email : {
        required : true,
        email:true
      },

      phone : {
        required : true,
        Number : true,
        length : 10
      },

      gender : {
        required : true
      }

    },

    messages : {
      f_name : {
        required : "This is required",
        lettersonly : "Enter only alphabets",
      },

      age_1:{
        required : "   This is required"
      },

      phone : {
        required : "This is required",
        Number : "Enter only number",
        length : "Enter only 10 digits"
      },

      gender : {
        required : "This is required"
      }

    },
   
  });
  $validator.addMethod('email',function(value,element){
    return this.optional(element) || !!value.trim().match(/^([A-Za-z0-9_\-\.])+\@([tntra|GMAIL])+\.(io)$/);
    
  }, "Please enter valid email");
});

$("#submitbtn").on('click', function() {
  localStorage.fname = $('#f_name').val();
  localStorage.age = $('#age_1').val();
  localStorage.mail = $('#email').val();
  localStorage.phone = $('#nume').val();
  localStorage.gender1 = $('input[name="gender"]:checked').val();
  localStorage.sun = $('#dropdown1').val();
  localStorage.mon = $('#dropdown2').val();
  localStorage.tues = $('#dropdown3').val();
  localStorage.wed = $('#dropdown4').val();
  localStorage.thur = $('#dropdown5').val();
  localStorage.fri = $('#dropdown6').val();
  localStorage.sat = $('#dropdown7').val();

});