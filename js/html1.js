$(document).ready(function(){

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
      },

      phone : {
        required : true,
        Number : true,
        min : 10
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

      email : {
        required : "This is required"
      },

      phone : {
        required : "This is required",
        Number : "Enter only number",
        min : "Enter only 10 digits"
      },

      gender : {
        required : "This is required"
      }

    }
  });
});