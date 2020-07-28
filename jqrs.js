$(document).ready(function(){
	$("#exampleModal .btn-primary").click(function(){
    	var valu = $('#heading-name').val(); // get value of input of heading modal
    	$('main').append('<section><h2>'+valu+'</h2></section>');  // stores input of heading modal in h2 tag 
    	$(".sbhdng select option").remove();     // remove static values of option of select
    	$(".sbhdng select").append('<option value=""></option>'); // create dynamic option for select
		$(".frmhdg select option").remove();
		$(".frmhdg select").append('<option value=""></option>');
		var len=$('main section').length;  // to calculate length of section of main 
		// console.log(len);
		$('main section h2').each(function(key){
			key=key+1	
			var hdd=$(this).text();		
			$(".sbhdng select").append('<option value="'+key+'">'+hdd+'</option>');	   // dynamically value and text created for option of select
			$(".frmhdg select").append('<option value="'+key+'">'+hdd+'</option>');	
		});
		$('#exampleModal').modal('hide');	// to hide heading modal
	});
 
	$('#exampleModal1 .btn-primary').click(function(){
		var headi = $('#sub-heading-name').val();  // get value of input of sub heading modal
		var hdn = $(".sbhdng select option:selected").val(); // to get value of selected option for select
		// console.log(hdn);
		$('main section:nth-child('+hdn+')').append('<div><h3>'+headi+'</h3></div>');  // stores input of sub heading fot a particular section with an h3 tag 
		$('#exampleModal1').modal('hide');
	});


	$('.frmhdg select').change(function(){                     // Chnage fnction works after some changes in element
		$(".sbhdg select option").remove();
		$(".sbhdg select").append('<option value=""></option>');
		var fdn = $(".frmhdg select option:selected").val();        // to get value of selected option form heading of form modal
		console.log(fdn); 
		$('main section:nth-child('+fdn+') div').each(function(key){      // each function over div of section of main, according to the selected option from heading of form modal
			var zxc = $(this).text();									  // text of particular div  
			key = key+1
			console.log(zxc);
			$('.sbhdg select').append('<option value="'+key+'">'+zxc+'</option>')
	
		});
	}); 
});


	

	


