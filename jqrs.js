$(document).ready(function(){
	if(localStorage.getItem('elearr')){
		console.log("zczczczzc");
		var ee = JSON.parse(localStorage.getItem('elearr'));
		$(ee).each(function(index,value){
			$('main').append('<section><h2>'+value.title+'</h2></section>');
			$(value.subheading).each(function(index,value){
				$('main section h2').append('<div><h3>'+value.title+'</h3></div>');
				$(value.form).each(function(index,value){
					$('main section div').append('<p><label>'+value.label+'</label><input type="'+value.input+'" value="'+value.value+'" name="'+value.name+'"></p>');
				});
			});
		});
	}
	var elearr = [];
	$("#exampleModal").submit(function(event){
  		event.preventDefault();
    	var valu = $('#heading-name').val();  											// get value of input of heading modal
    	$('main').append('<section><h2>'+valu+'<button onclick="myfunction(this)">X</button></h2></section>');  	 // stores input of heading modal in h2 tag 
    	$(".sbhdng select option").remove();  					  						 // remove static values of option of select
    	$(".sbhdng select").append('<option value=""></option>'); 						 // create dynamic option for select
		$(".frmhdg select option").remove();
		$(".frmhdg select").append('<option value=""></option>');       				  						
		$('main section h2').each(function(key){
			key=key+1	
			var hdd=$(this).text().replace("X","");     	
			$(".sbhdng select").append('<option value="'+key+'">'+hdd+'</option>');	   // dynamically value and text created for option of select
			$(".frmhdg select").append('<option value="'+key+'">'+hdd+'</option>');	
		});
		$('#exampleModal').modal('hide');	
		elearr.push({'title':valu, 'subheading':[]})
		console.log(elearr);											
	});
 
	$('#exampleModal1').submit(function(){
		event.preventDefault();
		var headi = $('#sub-heading-name').val();  										// get value of input of sub heading modal
		var hdn = $(".sbhdng select option:selected").val(); 							// to get value of selected option for select
		// console.log(hdn);
		$('main section:nth-child('+hdn+')').append('<div><h3>'+headi+'<button onclick="myfunction(this)">X</button></h3></div>');  // stores input of sub heading fot a particular section with an h3 tag 
		$('#exampleModal1').modal('hide');
		elearr[hdn-1].subheading.push({'title':headi, 'form':[]})
		console.log(elearr);
	});

	$('.frmhdg select').change(function(){                     							// Chnage fnction works after some changes in element
		$(".sbhdg select option").remove();
		$(".sbhdg select").append('<option value=""></option>');
		var fdn = $(".frmhdg select option:selected").val();       				       // to get value of selected option form heading of form modal
		// console.log(fdn); 
		$('main section:nth-child('+fdn+') div h3').each(function(key){   				   // each function over div of section of main, according to the selected option from heading of form modal
			var zxc = $(this).text().replace("X", " ");												   // X  in a text of particular div replaced with space  
			key = key+1
			// console.log(zxc);
			$('.sbhdg select').append('<option value="'+key+'">'+zxc+'</option>')
		});
	}); 

	$('.ff .btn-primary').click(function(){
		var fsh = $(".frmhdg select option:selected").val();
		var fss = $(".sbhdg select option:selected").val(); 
		var fss = parseInt(fss)+1;
		var fmin = $('.inpt select option:selected').val();
		// console.log(fss);
		// console.log(fmin);
		var lbl = $('.labl').val();
		var nm = $('.naam').val();
		var plchd = $('.plhd').val();
		var cls = $('.clas').val();
		var vlu = $('.vl').val();
		var opn = $('.opt').val();
		if (fmin == 'checkbox'){
			var opns = opn.split(',');																		// to split values by commas
			var aw = $('<p></p>');
			// console.log(opns);											 
			$(opns).each(function(key){	
				$(aw).append('<label>'+opns[key]+'</label><input type="'+fmin+'" value="'+vlu+'" name="'+nm+'">');
				elearr[fsh-1].subheading[fss-2].form.push({'input':fmin, 'label': opns[key], 'name': nm, 'placeholder': plchd, 'class': cls, 'value': vlu, 'option': opn})
				console.log(elearr);
			$('main section:nth-child('+fsh+') div:nth-child('+fss+')').append(aw);	
			});
		}
		else if (fmin == 'radio'){
				var opns = opn.split(',');
				var fr = $('<p></p>');
				$(opns).each(function(key){	
					$(fr).append('<label>'+opns[key]+'</label><input type="'+fmin+'" value="'+vlu+'" name="'+nm+'">');
					elearr[fsh-1].subheading[fss-2].form.push({'input':fmin, 'label': opns[key], 'name': nm, 'placeholder': plchd, 'class': cls, 'value': vlu, 'option': opn})
					console.log(elearr);
				$('main section:nth-child('+fsh+') div:nth-child('+fss+')').append(fr);
				});	
		}
		else if  (fmin == 'select'){
				var opns = opn.split(',');
				var aw = $('<p></p>')
				var ae = $('<select><option>select</option></select>');
				var kj = ('<label>'+lbl+'</label>')
				for (i=0; i< opns.length; i++){
					var ae = $(ae).append('<option value="'+opns[i]+'">'+opns[i]+'</option>')
					var kj = $(kj).append(ae);
					var aw = $(aw).append(kj);
				//  	elearr[fsh-1].subheading[fss-2].form.push({'<p><option value='opns[i]'>'opns[i]'</option></p>'})
				// console.log(elearr);
				$('main section:nth-child('+fsh+') div:nth-child('+fss+')').append(aw);	
				};
		}
		else if (fmin =='textarea'){
				$('main section:nth-child('+fsh+') div:nth-child('+fss+')').append('<p><label>'+lbl+'</label><input name="'+nm+'" rows="4" cols="50" value="'+vlu+'"></p>');
			elearr[fsh-1].subheading[fss-2].form.push({'input':fmin, 'label': lbl, 'name': nm, 'placeholder': plchd, 'class': cls, 'value': vlu, 'option': opn})
			console.log(elearr);
		}
		else{
				$('main section:nth-child('+fsh+') div:nth-child('+fss+')').append('<p><label>'+lbl+'</label><input type="'+fmin+'" name="'+nm+'" class="'+cls+'" value="'+vlu+'"></p>');
			elearr[fsh-1].subheading[fss-2].form.push({'input':fmin, 'label': lbl, 'name': nm, 'placeholder': plchd, 'class': cls, 'value': vlu, 'option': opn})
			console.log(elearr);
		}
		if ($("#disable").is(':checked')){
			var ddd = fmin
			if (fmin == 'email' || fmin == 'number' || fmin == 'text' || fmin == 'button' || fmin == 'checkbox' || fmin == 'file' || fmin == 'radio' || fmin == 'textarea' || fmin == 'select'){
				var ddd = 'input'
				var aaa = $('main section:nth-child('+fsh+') div:nth-child('+fss+')  p:last-child '+ddd ).val();
				// console.log(aaa);
				if (fmin == 'select'){
					var ddd = 'select'
					$('main section:nth-child('+fsh+') div:nth-child('+fss+')  p:last-child '+ddd ).prop('disabled', true);
				}		
			}
		    $('main section:nth-child('+fsh+') div:nth-child('+fss+')  p:last-child '+ddd ).prop('disabled', true);
		}
		else if ($("#readonly").is(':checked')){
			var ddd = fmin
			if (fmin == 'email' || fmin == 'number' || fmin == 'text' || fmin == 'button' || fmin == 'checkbox' || fmin == 'file' || fmin == 'radio' || fmin == 'textarea' || fmin == 'select'){
				var ddd = 'input'
				if (fmin == 'select'){
					var ddd = 'select'
					$('main section:nth-child('+fsh+') div:nth-child('+fss+')  p:last-child '+ddd ).prop('readonly', true);
				}
			}
			$('main section:nth-child('+fsh+') div:nth-child('+fss+') p:last-child '+ddd).prop("readonly", true);		
		}   
		else if ($("#required").is(':checked')){
			var ddd = fmin
			if (fmin == 'email' || fmin == 'number' || fmin == 'text' || fmin == 'button' || fmin == 'checkbox' || fmin == 'file' || fmin == 'radio' || fmin == 'textarea' || fmin == 'select'){
				var ddd = 'input'
				if (fmin == 'select'){
					var ddd = 'select'
					$('main section:nth-child('+fsh+') div:nth-child('+fss+')  p:last-child '+ddd ).prop('required', true);
				}	
			}
			$('main section:nth-child('+fsh+') div:nth-child('+fss+') p:last-child '+ddd).prop("required", true);
		}
		$('#exampleModal2').modal('hide');
		localStorage.setItem('elearr', JSON.stringify(elearr));	
	});
});

function myfunction(thisd){
	var z = $(thisd).parent().parent().remove();               							// function created to remove particular heading or subheading
};