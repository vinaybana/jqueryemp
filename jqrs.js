$(document).ready(function(){
	$(".had button").click(function(){
		// console.log("hello")
    	var valu = $('#heading-name').val();
    	// console.log(valu)
    	$('main').append('<h2>'+valu+'</h2>');
    	$("#subheadingModal select option").remove(); 
    	$("#subheadingModal select").append('<option value=""></option>');   
		$('main h2').each(function(key){
			var hdd=$(this).text();
			key=key+1		
			$("#subheadingModal select").append('<option value="'+key+'">'+hdd+'</option>'); 
			
		});
		$('#headingModal').modal('hide');	
	});
 
	$('.sbhd button').click(function(){
		var headi = $('#sub-heading-name').val();
		var hdn = $("#subheadingModal select option:selected").val();
		$('main h2:nth-child('+hdn+')').append('<h3>'+headi+'<h3>');
		$('#subheadingModal').modal('hide');
	});	
});	



	

	


