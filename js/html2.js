$(document).ready(function() {
  loadData();
});

function loadData() {
  $('#myTable').append('<tr><td>' 
  + localStorage.count + '</td><td>'
  + localStorage.fname + '</td><td>'
  + localStorage.age + '</td><td>'
  + localStorage.mail + '</td><td>'
  + localStorage.phone + '</td><td>'
  + localStorage.gender1 + '</td><td>'
  + localStorage.sun + '</td><td>'
  + localStorage.mon + '</td><td>'
  + localStorage.tues + '</td><td>'
  + localStorage.wed + '</td><td>'
  + localStorage.thur + '</td><td>'
  + localStorage.fri + '</td><td>'
  + localStorage.sat + '</td></tr>');
}