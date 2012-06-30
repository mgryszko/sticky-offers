$(document).ready(function() {
	$('li a').click(function() {
	  var name = $(this).text();
	  $.getJSON('/showdiscount/' + name, function(data) {
		$('#discountname').html(data.discountname);
		console.log(data.image);
	  });
	});
});