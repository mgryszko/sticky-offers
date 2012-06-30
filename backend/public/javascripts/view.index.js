$(document).ready(function() {
  $('li a').click(function() {
    var name = $(this).text();
    $.get('/showdiscount/' + name, function(data) {
      $('#image').append(data.image);
    }); 
  });
});