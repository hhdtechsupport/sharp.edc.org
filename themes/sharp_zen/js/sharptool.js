
 jQuery(document).ready(function($) {
	 
	 if ($('.field-name-field-type-of-factor').length){
 $("label[for='edit-name']").text("Factor Name");
 $("label[for='edit-description-value']").text("Factor Measure");
	 }
	 if ($('.field-name-field-type-of-outcome').length){
 $("label[for='edit-name']").text("Outcome Name");
 $("label[for='edit-description-value']").text("Outcome Measure");
	 }
	 
});


 jQuery(document).ready(function($) {
	 
	 if ($('.views-field-field-outcome-table-description').length){
 $('#page-title').hide();
	 }	 
});

 jQuery(document).ready(function($) {
	 
	 if ( $(".views-field-field-type-of-factor:contains('Protective Factor')").length > 0 ) {
    $('.view-id-outcomes_table_for_factor_page thead .views-field-field-outcome').html('Outcome (Associated with a Reduced Likelihood of <em>X</em>)');
}
 if ( $(".views-field-field-type-of-factor:contains('Risk Factor')").length > 0 ) {
    $('.view-id-outcomes_table_for_factor_page thead .views-field-field-outcome').html('Outcome (Associated with an Increased Likelihood of <em>X</em>)');
}

	 
	
});

jQuery(document).ready(function($) {
	 
	 $("#block-block-3, #block-block-4, #block-block-5, #block-block-7").click(function(){
     window.location=$(this).find("a.this-link").attr("href"); 
     return false;
});
});

 jQuery(document).ready(function($) {
	
	var list_item = 0;
	
	$('.view-references ol').find('.views-field').each(function(){
	
		list_item = list_item + 1;
		
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,8) == 'citekey-') {
				var citekey = classes[i].split('citekey-')[1];
			}
		}	
		
		$('.view-outcomes-table-for-outcome-page').find('sup').each(function(){
		
			if ($(this).text() == citekey) {
				$(this).replaceWith('<sup>' + list_item + '</sup>');
			}
			
		});
		
	});



});


jQuery(document).ready(function($) {
    jQuery('a.popup').live('click', function(){
        newwindow=window.open($(this).attr('href'),null,'height=500,width=500,left=100,top=100,resizable=1,scrollbars=yes,toolbar=yes,status=yes');
        if (window.focus) {newwindow.focus()}
        return false;
    });
});

jQuery(document).ready(function($) { 
  $( ".ab" ).each(function( i ) {
    if ( $(this).find(".specialPopulation:contains('a')").length > 0 && $(this).find(".specialConditions:contains('b')").length > 0) {
	  $(this).find(".abComma").html(', ');
    }
  });
});