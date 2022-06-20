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

  $('input:checkbox').on('change',function() {
    if (!$(this).is(':checked')) $(this).closest('div.Sunday').find('select').val('');
  });

  $('input:checkbox').on('click change',function() {
    if (!$(this).is(':checked')) $(this).closest('div.Monday').find('select').val('');
  });
  

  $('input:checkbox').on('click change',function() {
    if (!$(this).is(':checked')) $(this).closest('div.Tuesday').find('select').val('');
  });


  $('input:checkbox').on('click change',function() {
    if (!$(this).is(':checked')) $(this).closest('div.Wednesday').find('select').val('');
  });


  $('input:checkbox').on('click change',function() {
    if (!$(this).is(':checked')) $(this).closest('div.Thursday').find('select').val('');
  });


  $('input:checkbox').on('click change',function() {
    if (!$(this).is(':checked')) $(this).closest('div.Friday').find('select').val('');
  });


  $('input:checkbox').on('click change',function() {
    if (!$(this).is(':checked')) $(this).closest('div.Saturday').find('select').val('');
  });

  $("#form").validate({

    errorPlacement: function(error, element) {
      if (element.is(":radio")){
        error.insertAfter("#other");
    }
    // else if(element.is("#check_1-error")){
    //   error.insertAfter(":label")
    // }
    // else if(element.is("#check2_1-error")){
    //   error.insertAfter("#check2_1");
    // }
    else{
      error.insertAfter(element);
    }
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
        limit : true
      },

      gender : {
        required : true
      },

      check_1 : {
        required : true
      },
      // check2_1:{
      //   sunfunc:true
      // }
      // monday:{
      //   monfunc:true
      // },
      // tuesday:{
      //   tuesfunc:true
      // },
      // wednesday:{
      //   wedfunc:true
      // },
      // thursday:{
      //   thursfunc:true
      // },
      // friday:{
      //   frifunc:true
      // },
      // saturday:{
      //   satfunc:true
      // }
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

    }
   
  });



$.validator.addMethod('email',function(value){
  return /^([A-Za-z0-9_\-\.])+\@([tntra])+\.(io)/.test(value);
},"Please enter valid email");
});
function isEmail(email) {
  var regex = /^([A-Za-z0-9_\-\.])+\@([tntra])+\.(io)/
  return regex.test(email);
}


$.validator.addMethod('limit',function(value){
  return /[1-9]{1}[0-9]{9}/.test(value); 
}, 'Please enter a valid Phone number');
function isPhone(limit){
  var regex = /[1-9]{1}[0-9]{9}/
  return regex.test(limit);
}




//  $.validator.addMethod('sunfunc',function(){
//    return $("#CHECK2_1").val()=='on' && $('#dropdown1').val() != '';
//   }, 'Please enter Pick up time');

  // $.validator.addMethod('sunfunc',function(){
  //   return $("#CHECK2_2").val()=='on' && $('#dropdown2').val() != '';
  //  }, 'Please enter Pick up time');

  //  $.validator.addMethod('monfunc',function(){
  //   return $("#CHECK2_3").val()=='on' && $('#dropdown3').val() != '';
  //  }, 'Please enter Pick up time');

  //  $.validator.addMethod('tuesfunc',function(){
  //   return $("#CHECK2_4").val()=='on' && $('#dropdown4').val() != '';
  //  }, 'Please enter Pick up time');

  //  $.validator.addMethod('wedfunc',function(){
  //   return $("#CHECK2_5").val()=='on' && $('#dropdown5').val() != '';
  //  }, 'Please enter Pick up time');

  //  $.validator.addMethod('thursfunc',function(){
  //   return $("#CHECK2_6").val()=='on' && $('#dropdown6').val() != '';
  //  }, 'Please enter Pick up time');

  //  $.validator.addMethod('frifunc',function(){
  //   return $("#CHECK2_7").val()=='on' && $('#dropdown7').val() != '';
  //  }, 'Please enter Pick up time');

  //  $.validator.addMethod('satfunc',function(){
  //   return $("#CHECK2_7").val()=='on' && $('#dropdown7').val() != '';
  //  }, 'Please enter Pick up time');


 
$("#submitbtn").on('click', function() {
  if (
  $('#f_name').valid() &&
  $('#age_1').valid() &&
  $("#email").valid() &&
  $("#nume").valid() && 
  $("input[name='gender']:checked") != undefined );
  
{
  
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

}

});
