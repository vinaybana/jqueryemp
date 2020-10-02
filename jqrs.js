$(document).ready(function(){
	var elearr = [];
	if(localStorage.getItem('elearr')){
		var ee = JSON.parse(localStorage.getItem('elearr'));
		$(ee).each(function(index,value){
			$('main').append('<section><h2>'+value.title+'<button onclick="MYfunction(this)">X</button></h2></section>');
			$(value.subheading).each(function(index1,value1){
				var zz = index+1;
				$('main section:nth-child('+zz+')').append('<div><h3>'+value1.subtitle+'<button onclick="MYfunction(this)">X</button></h3></div>');
				$(value1.form).each(function(index2,value2){
					var mm = index1+2;
					if (value2.input == 'select' ){
						var vlu = $('.vl').val();
						var opns = value2.option
						var aw = $('<p><label>'+value2.label+'</label></p>')
						var ae = $('<select class='+value2.class+' name='+value2.name+'><option>select</option></select>').appendTo(aw);
						var as = $('<button onclick="MYfunction(this)">X</button>').appendTo(aw);
						for (i=0; i<opns.length; i++){
								$(ae).append('<option value="'+opns[i]+'">'+opns[i]+'</option>')		
						}
						$('main section:nth-child('+zz+') div:nth-child('+mm+') ').append(aw);
					}else{
						if(value2.dis==true){
							$('main section:nth-child('+zz+') div:nth-child('+mm+') ').append('<p><label>'+value2.label+'</label><input type="'+value2.input+'" class="'+value2.class+'" value="'+value2.value+'" name="'+value2.name+'" option = "'+value2.option+'" disabled="'+disabled+'"><button onclick="MYfunction(this)">X</button></p>');
						}
						$('main section:nth-child('+zz+') div:nth-child('+mm+') ').append('<p><label>'+value2.label+'</label><input type="'+value2.input+'" class="'+value2.class+'" value="'+value2.value+'" name="'+value2.name+'" option = "'+value2.option+'"><button onclick="MYfunction(this)">X</button></p>');		
					}
				});
			});
		});
	}
	$(".formfirst").submit(function(event){
  		event.preventDefault();
    	var valu = $('.heading-name').val();  											// get value of input of heading modal
    	$('main').append('<section><h2>'+valu+'<button onclick="myfunction(this)">X</button></h2></section>');  	 // stores input of heading modal in h2 tag 
    	$(".sbhdng select option").remove();  					  						 // remove static values of option of select
    	$(".sbhdng select").append('<option value="select heading">select heading</option>'); 						 // create dynamic option for select
		$(".frmhdg select option").remove();
		$(".frmhdg select").append('<option value="select heading">select heading</option>');       				  						
		$('main section h2').each(function(key){
			key=key+1	
			var hdd=$(this).text().replace("X","");     	
			$(".sbhdng select").append('<option value="'+key+'">'+hdd+'</option>');	   // dynamically value and text created for option of select
			$(".frmhdg select").append('<option value="'+key+'">'+hdd+'</option>');	
			
		});
		elearr.push({'title':valu, 'subheading':[]})
		localStorage.setItem('elearr', JSON.stringify(elearr));		
		$('.formfirst')[0].reset()								
	});
 
	$('.formsecond').submit(function(event){
		event.preventDefault();
		var headi = $('.sub-heading-name').val();  										// get value of input of sub heading modal
		var hdn = $(".sbhdng select").val(); 							// to get value of selected option for select
		$('main section:nth-child('+hdn+')').append('<div><h3>'+headi+'<button onclick="myfunction(this)">X</button></h3></div>');  // stores input of sub heading fot a particular section with an h3 tag 
		elearr[hdn-1].subheading.push({'subtitle':headi, 'form':[]})
		localStorage.setItem('elearr', JSON.stringify(elearr));	
		$('.formsecond')[0].reset()	
	});

	$('.frmhdg select').change(function(){                     							// Chnage fnction works after some changes in element
		$(".sbhdg select option").remove();
		$(".sbhdg select").append('<option value="select sub-heading">select sub-heading</option>');
		var fdn = $(".frmhdg select").val();       				       // to get value of selected option form heading of form modal 
		$('main section:nth-child('+fdn+') div h3').each(function(key){   				   // each function over div of section of main, according to the selected option from heading of form modal
			var zxc = $(this).text().replace("X", "");												   // X  in a text of particular div replaced with space  
			key = key+1
			$('.sbhdg select').append('<option value="'+key+'">'+zxc+'</option>')
		});
	}); 

	$('.formthird').submit(function(e){
		e.preventDefault()
		var fsh = $(".frmhdg select").val();
		var fss = $(".sbhdg select").val(); 
		var fss = parseInt(fss)+1;
		var fmin = $('.inpt select option:selected').val();
		var lbl = $('.labl').val();
		var nm = $('.naam').val();
		var plchd = $('.plhd').val();
		var cls = $('.clas').val();
		var vlu = $('.vl').val();
		var opn = $('.opt').val();
		var dis = false;
		var read = false;
		var req = false;
		// function changedefault(index, value3){
		// 	elearr[fsh-1].subheading[fss-2].form.dis =true;
		// }
		if (fmin == 'checkbox'){
			var opns = opn.split(',');																		// to split values by commas
			var aw = $('<p></p>');										 
			$(opns).each(function(key){	
				$(aw).append('<label>'+opns[key]+'</label><input type="'+fmin+'" value="'+vlu+'" class = '+cls+' name="'+nm+'" ><button onclick="MYfunction(this)">X</button>');
				elearr[fsh-1].subheading[fss-2].form.push({'input':fmin, 'label': opns[key], 'name': nm, 'class': cls, 'value': vlu, 'disabled': dis, 'readonly': read, 'required': req})
			});
			$('main section:nth-child('+fsh+') div:nth-child('+fss+') ').append(aw);	
			
		}
		else if (fmin == 'radio'){
			var opns = opn.split(',');
			var fr = $('<p></p>');
			$(opns).each(function(key){
				$(fr).append('<label>'+opns[key]+'</label><input type="'+fmin+'" class = '+cls+' value="'+vlu+'" name="'+nm+'"><button onclick="MYfunction(this)">X</button>');
				elearr[fsh-1].subheading[fss-2].form.push({'input':fmin, 'label': opns[key], 'name': nm, 'class': cls, 'value': vlu, 'disabled': dis, 'readonly': read, 'required': req})
			});	
			$('main section:nth-child('+fsh+') div:nth-child('+fss+') ').append(fr);
			
		}
		else if  (fmin == 'select'){
			var opns = opn.split(',');
			var aw = $('<p><label>'+lbl+'</label></p>')
			var ae = $('<select class='+cls+' name='+nm+'><option>select</option></select>').appendTo(aw);
			var as = $('<button onclick="MYfunction(this)">X</button>').appendTo(aw);				
			for (i=0; i< opns.length; i++){
				if(vlu  == opns[i]){
					$(ae).append('<option value="'+opns[i]+'" selected =" selected">'+opns[i]+'</option>')
				}else{
					$(ae).append('<option value="'+opns[i]+'">'+opns[i]+'</option>')	
				}	
			}
			elearr[fsh-1].subheading[fss-2].form.push({'input':fmin, 'label': lbl, 'name': nm, 'class': cls, 'option': opns, 'disabled': dis, 'readonly': read, 'required': req})
			$('main section:nth-child('+fsh+') div:nth-child('+fss+') ').append(aw);	
				
		}
		else if (fmin =='textarea'){
			$('main section:nth-child('+fsh+') div:nth-child('+fss+') ').append('<p><label>'+lbl+'</label><input name="'+nm+'" placeholder = "'+plchd+'" rows="4" cols="50" value="'+vlu+'"><button onclick="MYfunction(this)">X</button></p>');
			elearr[fsh-1].subheading[fss-2].form.push({'input':fmin, 'label': lbl, 'name': nm, 'placeholder': plchd, 'class': cls, 'value': vlu, 'disabled': dis, 'readonly': read, 'required': req})
		}
		else{
			$('main section:nth-child('+fsh+') div:nth-child('+fss+') ').append('<p><label>'+lbl+'</label><input type="'+fmin+'" name="'+nm+'" placeholder = "'+plchd+'" class="'+cls+'" value="'+vlu+'"><button onclick="MYfunction(this)">X</button></p>');
			elearr[fsh-1].subheading[fss-2].form.push({'input':fmin, 'label': lbl, 'name': nm, 'placeholder': plchd, 'class': cls, 'value': vlu, 'disabled': dis, 'readonly': read, 'required': req})
		}
		if ($(".disable").is(':checked')){
			var ddd = fmin
			if (fmin == 'email' || fmin == 'number' || fmin == 'text' || fmin == 'button' || fmin == 'checkbox' || fmin == 'file' || fmin == 'radio'){
				ddd = 'input'
			}
		    $('main section:nth-child('+fsh+') div:nth-child('+fss+')  p:last-child '+ddd ).attr('disabled', 'disabled');	
		    elearr[fsh-1].subheading[fss-2].form.push({'dis':true})	
		    // elearr[fsh-1].subheading[fss-2].form.dis =true;
		    // console.log(elearr)

			// elearr[fsh-1].subheading[fss-2].form.push({'dis':true})
		}
		if ($(".readonly").is(':checked')){
			var ddd = fmin
			if (fmin == 'email' || fmin == 'number' || fmin == 'text' || fmin == 'button' || fmin == 'checkbox' || fmin == 'file' || fmin == 'radio'){
				ddd = 'input'
			}
			$('main section:nth-child('+fsh+') div:nth-child('+fss+') p:last-child '+ddd).attr({'readonly': 'readonly'});		
			elearr[fsh-1].subheading[fss-2].form.push({'read':true})
		}   
		if ($(".required").is(':checked')){
			var ddd = fmin
			if (fmin == 'email' || fmin == 'number' || fmin == 'text' || fmin == 'button' || fmin == 'checkbox' || fmin == 'file' || fmin == 'radio'){
				ddd = 'input'	
			}
			$('main section:nth-child('+fsh+') div:nth-child('+fss+') p:last-child '+ddd).attr({'required': 'required'});
			elearr[fsh-1].subheading[fss-2].form.push({'req':true})
		}
		localStorage.setItem('elearr', JSON.stringify(elearr));
		$('.formthird')[0].reset()
	});
	
});

function myfunction(thisd){
	var z = $(thisd).parent().parent().remove();               							// function created to remove particular heading or subheading
	var a = $(thisd).parent().text();
	var w = $(".sbhdng select option").text();
	console.log(w)
	$(w).each(function(c,v){
		console.log(c,v)
	})

};

function MYfunction(thise){
	var q = $(thise).parent().remove();  	
};

