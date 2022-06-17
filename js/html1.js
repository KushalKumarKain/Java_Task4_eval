$(document).ready(function(){

  $('.check2_1').attr('disabled', true);
  $('#check1').change(function() {
    $('.check2_1').attr('disabled', !this.checked);
  });


  $('.check2_2').attr('disabled', true);
  $('#check1').change(function() {
    $('.check2_2').attr('disabled', !this.checked);
  });



  $('.check2_3').attr('disabled', true);
  $('#check1').change(function() {
    $('.check2_3').attr('disabled', !this.checked);
  });


  $('.check2_4').attr('disabled', true);
  $('#check1').change(function() {
    $('.check2_4').attr('disabled', !this.checked);
  });


  $('.check2_5').attr('disabled', true);
  $('#check1').change(function() {
    $('.check2_5').attr('disabled', !this.checked);
  });


  $('.check2_6').attr('disabled', true);
  $('#check1').change(function() {
    $('.check2_6').attr('disabled', !this.checked);
  });


  $('.check2_7').attr('disabled', true);
  $('#check1').change(function() {
    $('.check2_7').attr('disabled', !this.checked);
  });


  $('.day1').attr('disabled',true);
  $('.check2_1').change(function(){
    $('.day1').attr('disabled', !this.checked);
  });


  $('.day2').attr('disabled',true);
  $('.check2_2').change(function(){
    $('.day2').attr('disabled', !this.checked);
  });


  $('.day3').attr('disabled',true);
  $('.check2_3').change(function(){
    $('.day3').attr('disabled', !this.checked);
  });


  $('.day4').attr('disabled',true);
  $('.check2_4').change(function(){
    $('.day4').attr('disabled', !this.checked);
  });


  $('.day5').attr('disabled',true);
  $('.check2_5').change(function(){
    $('.day5').attr('disabled', !this.checked);
  });
  

  $('.day6').attr('disabled',true);
  $('.check2_6').change(function(){
    $('.day6').attr('disabled', !this.checked);
  });


  $('.day7').attr('disabled',true);
  $('.check2_7').change(function(){
    $('.day7').attr('disabled', !this.checked);

    
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
  $validator.addMethod('email',function(value){
    return /^([A-Za-z0-9_\-\.])+\@([tntra])+\.(io)/.test(value);
  },"Please enter valid email");


  // if ($('#name').valid() &&
  // $('#age').valid() &&
  // $("#email").valid() &&
  // $("#phoneno").valid() && 
  
  // $("input[name='gender']:checked") != undefined);
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