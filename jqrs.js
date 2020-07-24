$(document).ready(function(){
	$('#headingModal').on('click', '.btn-primary', function(){
    	var valu = $('#heading-name').val();
    	$("main").append('<h2>'+valu+'</h2>');    
		$('#headingModal').modal('hide');
		$.each(('main h2'), function(i){
			$.each('main h2').text(i), function(index,value){
				$("select").append('<option>'+value+'<option>');
			};
		});	
	});
	$('#subheadingModal').on('click', '.btn-primary', function(){
		var headi = $('#sub-heading-name').val();
		$("main h2").append('<h3>'+headi+'</h3>');
		$('#subheadingModal').modal('hide');
	});	
});	



	

	


