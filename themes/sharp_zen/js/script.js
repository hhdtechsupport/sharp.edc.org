/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
$(document).ready( function () {
	
	
function cl(thing){
	if(typeof(console) !== 'undefined' && console != null){
		console.log(thing);
	}
}

function isEmpty(thing){
	return !$.trim(thing.html());
  }




$('.section-using-the-data #block-menu-block-1').find('li a').each(function(){
	
	$(this).html($(this).html().substring(0,12)+'<br/>'+$(this).html().substring(12));
	
});


var article_citation = $('.node-type-biblio.section-article article');

$('.node-type-biblio.section-article #page-title').html(article_citation.html()).find('a').replaceWith($('#page-title a').text());

article_citation.remove();




$('.node-type-biblio.section-article .view-outcomes-table').find('th').each(function(){
	
	if (isEmpty($(this))) {
		$(this).remove();
	}
	
});

$('.node-type-biblio.section-article .view-outcomes-table').find('td').each(function(){
	
	if (isEmpty($(this))) {
		$(this).remove();
	}
	
});










if ($('body').hasClass('section-factor')) {

	// Combine duplicate "Age category at outcome" rows
	
	var row_outcome_counter = -1;
	var ageoutcome_rowspan_counter = 1;
	var ageoutcome_tid_old = -1;
	var ageoutcome_tid_new = -1;
	var ageoutcome_element = $('.view-outcomes-table .views-row-first .views-field-field-age-category-at-outcome');
	
	$('.view-outcomes-table').find('.views-field-field-age-category-at-outcome').each(function(){
		
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,11) == 'ageoutcome-') {
				var ageoutcome = classes[i].split('ageoutcome-')[1];
			}
		}
		
		ageoutcome_tid_new = ageoutcome;
		
		if (ageoutcome_tid_new == ageoutcome_tid_old) {
			ageoutcome_rowspan_counter = ageoutcome_rowspan_counter + 1;
			$(this).parent().addClass('ageoutcome-' + row_outcome_counter);
			ageoutcome_element.attr('rowspan' , ageoutcome_rowspan_counter);		
			$(this).remove();
		}
		else {
			ageoutcome_rowspan_counter = 1;
			ageoutcome_element = $(this);
			row_outcome_counter = row_outcome_counter + 1;
			$(this).parent().addClass('ageoutcome-' + row_outcome_counter);
		}
		
		ageoutcome_tid_old = ageoutcome_tid_new;
	
		
	});
	
	
	// Combine duplicate "Age category at exposure" rows
	
	var row_ageexposure_counter = -1;
	var ageoutcome_group = 1;
	var ageexposure_rowspan_counter = 1;
	var ageexposure_tid_old = -1;
	var ageexposure_tid_new = -1;
	var ageexposure_element = $('.view-outcomes-table .views-row-first .views-field-field-age-category-at-exposure');
	
	$('.view-outcomes-table').find('.views-field-field-age-category-at-exposure').each(function(){
				
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,12) == 'ageexposure-') {
				var ageexposure = classes[i].split('ageexposure-')[1];
			}
		}
		
		ageexposure_tid_new = ageexposure;
		var ageoutcome_group_next = ageoutcome_group + 1;
	
	
		if ((ageexposure_tid_new == ageexposure_tid_old) && ($(this).parent().hasClass('ageoutcome-' + ageoutcome_group))) {
			ageexposure_rowspan_counter = ageexposure_rowspan_counter + 1;
			$(this).parent().addClass('ageexposure-' + row_ageexposure_counter);
			ageexposure_element.attr('rowspan' , ageexposure_rowspan_counter);		
			$(this).remove();
		}
		else if (($(this).parent().hasClass('ageoutcome-' + ageoutcome_group_next))) {
			ageoutcome_group = ageoutcome_group_next;
			ageexposure_rowspan_counter = 1;
			ageexposure_element = $(this);
			row_ageexposure_counter = row_ageexposure_counter + 1;
			$(this).parent().addClass('ageexposure-' + row_ageexposure_counter);	
		}
		else {
			ageexposure_rowspan_counter = 1;
			ageexposure_element = $(this);
			row_ageexposure_counter = row_ageexposure_counter + 1;
			$(this).parent().addClass('ageexposure-' + row_ageexposure_counter);			
		}
		
		ageexposure_tid_old = ageexposure_tid_new;
		
		
	});
	
	
	// Combine duplicate "Gender" rows
	
	var row_gender_counter = -1;
	var ageexposure_group = 1;
	var gender_rowspan_counter = 1;
	var gender_old = '';
	var gender_new = '';
	var gender_element = $('.view-outcomes-table .views-row-first .views-field-field-gender');
	
	$('.view-outcomes-table').find('.views-field-field-gender').each(function(){
				
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,7) == 'gender-') {
				var gender = classes[i].split('gender-')[1];
			}
		}
		
		gender_new = gender;
		var ageexposure_group_next = ageexposure_group + 1;
	
	
		if ((gender_new == gender_old) && ($(this).parent().hasClass('ageexposure-' + ageexposure_group))) {
			gender_rowspan_counter = gender_rowspan_counter + 1;
			$(this).parent().addClass('gender-' + row_gender_counter);
			gender_element.attr('rowspan' , gender_rowspan_counter);		
			$(this).remove();
		}
		else if (($(this).parent().hasClass('ageexposure-' + ageexposure_group_next))) {
			ageexposure_group = ageexposure_group_next;
			gender_rowspan_counter = 1;
			gender_element = $(this);
			row_gender_counter = row_gender_counter + 1;
			$(this).parent().addClass('gender-' + row_gender_counter);	
		}
		else {
			gender_rowspan_counter = 1;
			gender_element = $(this);
			row_gender_counter = row_gender_counter + 1;
			$(this).parent().addClass('gender-' + row_gender_counter);			
		}
		
		gender_old = gender_new;
		
		
	});
	
	
	// Combine duplicate "Outcome" rows
	
	var row_outcome_counter = -1;
	var gender_group = 1;
	var outcome_rowspan_counter = 1;
	var outcome_old = -1;
	var outcome_new = -1;
	var outcome_element = $('.view-outcomes-table .views-row-first .views-field-field-outcome');
	var outcome_cite_element = $('.view-outcomes-table .views-row-first .views-field-field-outcome span');
	var current_outcome_cite_element = $('.view-outcomes-table .views-row-first .views-field-field-outcome span');
	
	$('.view-outcomes-table').find('.views-field-field-outcome').each(function(){
				
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,12) == 'onlyoutcome-') {
				var outcome = classes[i].split('onlyoutcome-')[1];
			}
		}
		
		outcome_new = outcome;
		var gender_group_next = gender_group + 1;
	
	
		if ((outcome_new == outcome_old) && ($(this).parent().hasClass('gender-' + gender_group))) {
			outcome_rowspan_counter = outcome_rowspan_counter + 1;
			$(this).parent().addClass('outcome-' + row_outcome_counter);
			outcome_element.attr('rowspan' , outcome_rowspan_counter);
			
			outcome_cite_element.append('<sup>, </sup><sup>' + $(this).find('span').text() + '</sup>');
			
			$(this).remove();
		}
		else if (($(this).parent().hasClass('gender-' + gender_group_next))) {
			gender_group = gender_group_next;
			outcome_rowspan_counter = 1;
			outcome_element = $(this);
			row_outcome_counter = row_outcome_counter + 1;
			$(this).parent().addClass('outcome-' + row_outcome_counter);
			
			outcome_cite_element = $(this).find('span');
		}
		else {
			outcome_rowspan_counter = 1;
			outcome_element = $(this);
			row_outcome_counter = row_outcome_counter + 1;
			$(this).parent().addClass('outcome-' + row_outcome_counter);			
			outcome_cite_element = $(this).find('span');
		}
		
		outcome_old = outcome_new;
		
		
	});
	
	
	
	
	
	// Replace the tids in the outcomes column with the list number in the references list
	
	var list_item = 0;
	
	$('.view-references ol').find('.views-field').each(function(){
	
		list_item = list_item + 1;
		
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,8) == 'citekey-') {
				var citekey = classes[i].split('citekey-')[1];
			}
		}	
		
		$('.view-outcomes-table-for-factor-page').find('sup').each(function(){
		
			if ($(this).text() == citekey) {
				$(this).replaceWith('<sup>' + list_item + '</sup>');
			}
			
		});
		
	});

	

}








if ($('body').hasClass('section-article')) {


	// Combine duplicate "Factor" rows
	
	var row_factor_counter = -1;
	var factor_rowspan_counter = 1;
	var factor_tid_old = -1;
	var factor_tid_new = -1;
	var factor_element = $('.view-outcomes-table .views-row-first .views-field-field-factor');
	
	$('.view-outcomes-table').find('.views-field-field-factor').each(function(){
		
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,7) == 'factor-') {
				var factor = classes[i].split('factor-')[1];
			}
		}

		factor_tid_new = factor;
		
		if (factor_tid_new == factor_tid_old) {
			factor_rowspan_counter = factor_rowspan_counter + 1;
			$(this).parent().addClass('factor-' + row_factor_counter);
			factor_element.attr('rowspan' , factor_rowspan_counter);
			$(this).remove();
		}
		else {
			factor_rowspan_counter = 1;
			factor_element = $(this);
			row_factor_counter = row_factor_counter + 1;
			$(this).parent().addClass('factor-' + row_factor_counter);
		}
		
		factor_tid_old = factor_tid_new;
	
		
	});

	
	// Combine duplicate "Ecological model level" rows
	
	var row_level_counter = -1;
	var factor_group = 1;
	var level_rowspan_counter = 1;
	var level_tid_old = -1;
	var level_tid_new = -1;
	var level_element = $('.view-outcomes-table .views-row-first .views-field-field-ecological-model-level');
	
	$('.view-outcomes-table').find('.views-field-field-ecological-model-level').each(function(){
				
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,6) == 'level-') {
				var level = classes[i].split('level-')[1];
			}
		}
		
		level_tid_new = level;
		var factor_group_next = factor_group + 1;
	
	
		if ((level_tid_new == level_tid_old) && ($(this).parent().hasClass('factor-' + factor_group))) {
			level_rowspan_counter = level_rowspan_counter + 1;
			$(this).parent().addClass('level-' + row_level_counter);
			level_element.attr('rowspan' , level_rowspan_counter);		
			$(this).remove();
		}
		else if (($(this).parent().hasClass('factor-' + factor_group_next))) {
			factor_group = factor_group_next;
			level_rowspan_counter = 1;
			level_element = $(this);
			row_level_counter = row_level_counter + 1;
			$(this).parent().addClass('level-' + row_level_counter);	
		}
		else {
			level_rowspan_counter = 1;
			level_element = $(this);
			row_level_counter = row_level_counter + 1;
			$(this).parent().addClass('level-' + row_level_counter);			
		}
		
		level_tid_old = level_tid_new;
		
		
	});


	// Combine duplicate "Theme" rows
	
	var row_theme_counter = -1;
	var level_group = 1;
	var theme_rowspan_counter = 1;
	var theme_tid_old = -1;
	var theme_tid_new = -1;
	var theme_element = $('.view-outcomes-table .views-row-first .views-field-nothing-1');
	
	$('.view-outcomes-table').find('.views-field-nothing-1').each(function(){
				
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,6) == 'theme-') {
				var theme = classes[i].split('theme-')[1];
			}
		}
		
		theme_tid_new = theme;
		var level_group_next = level_group + 1;
	
	
		if ((theme_tid_new == theme_tid_old) && ($(this).parent().hasClass('level-' + level_group))) {
			theme_rowspan_counter = theme_rowspan_counter + 1;
			$(this).parent().addClass('theme-' + row_theme_counter);
			theme_element.attr('rowspan' , theme_rowspan_counter);		
			$(this).remove();
		}
		else if (($(this).parent().hasClass('level-' + level_group_next))) {
			level_group = level_group_next;
			theme_rowspan_counter = 1;
			theme_element = $(this);
			row_theme_counter = row_theme_counter + 1;
			$(this).parent().addClass('theme-' + row_theme_counter);	
		}
		else {
			theme_rowspan_counter = 1;
			theme_element = $(this);
			row_theme_counter = row_theme_counter + 1;
			$(this).parent().addClass('theme-' + row_theme_counter);			
		}
		
		theme_tid_old = theme_tid_new;
		
		
	});


	// Combine duplicate "Age category at outcome" rows
	
	var row_ageoutcome_counter = -1;
	var theme_group = 1;
	var ageoutcome_rowspan_counter = 1;
	var ageoutcome_tid_old = -1;
	var ageoutcome_tid_new = -1;
	var ageoutcome_element = $('.view-outcomes-table .views-row-first .views-field-field-age-category-at-outcome');
	
	$('.view-outcomes-table').find('.views-field-field-age-category-at-outcome').each(function(){
				
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,11) == 'ageoutcome-') {
				var ageoutcome = classes[i].split('ageoutcome-')[1];
			}
		}
		
		ageoutcome_tid_new = ageoutcome;
		var theme_group_next = theme_group + 1;
	
	
		if ((ageoutcome_tid_new == ageoutcome_tid_old) && ($(this).parent().hasClass('theme-' + theme_group))) {
			ageoutcome_rowspan_counter = ageoutcome_rowspan_counter + 1;
			$(this).parent().addClass('ageoutcome-' + row_ageoutcome_counter);
			ageoutcome_element.attr('rowspan' , ageoutcome_rowspan_counter);		
			$(this).remove();
		}
		else if (($(this).parent().hasClass('theme-' + theme_group_next))) {
			theme_group = theme_group_next;
			ageoutcome_rowspan_counter = 1;
			ageoutcome_element = $(this);
			row_ageoutcome_counter = row_ageoutcome_counter + 1;
			$(this).parent().addClass('ageoutcome-' + row_ageoutcome_counter);	
		}
		else {
			ageoutcome_rowspan_counter = 1;
			ageoutcome_element = $(this);
			row_ageoutcome_counter = row_ageoutcome_counter + 1;
			$(this).parent().addClass('ageoutcome-' + row_ageoutcome_counter);			
		}
		
		ageoutcome_tid_old = ageoutcome_tid_new;
		
		
	});



	// Combine duplicate "Age category at exposure" rows
	
	var row_ageexposure_counter = -1;
	var ageoutcome_group = 1;
	var ageexposure_rowspan_counter = 1;
	var ageexposure_tid_old = -1;
	var ageexposure_tid_new = -1;
	var ageexposure_element = $('.view-outcomes-table .views-row-first .views-field-field-study-population');
	
	$('.view-outcomes-table').find('.views-field-field-study-population').each(function(){
				
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,12) == 'ageexposure-') {
				var ageexposure = classes[i].split('ageexposure-')[1];
			}
		}
		
		ageexposure_tid_new = ageexposure;
		var ageoutcome_group_next = ageoutcome_group + 1;
	
	
		if ((ageexposure_tid_new == ageexposure_tid_old) && ($(this).parent().hasClass('ageoutcome-' + ageoutcome_group))) {
			ageexposure_rowspan_counter = ageexposure_rowspan_counter + 1;
			$(this).parent().addClass('ageexposure-' + row_ageexposure_counter);
			ageexposure_element.attr('rowspan' , ageexposure_rowspan_counter);		
			$(this).remove();
		}
		else if (($(this).parent().hasClass('ageoutcome-' + ageoutcome_group_next))) {
			ageoutcome_group = ageoutcome_group_next;
			ageexposure_rowspan_counter = 1;
			ageexposure_element = $(this);
			row_ageexposure_counter = row_ageexposure_counter + 1;
			$(this).parent().addClass('ageexposure-' + row_ageexposure_counter);	
		}
		else {
			ageexposure_rowspan_counter = 1;
			ageexposure_element = $(this);
			row_ageexposure_counter = row_ageexposure_counter + 1;
			$(this).parent().addClass('ageexposure-' + row_ageexposure_counter);			
		}
		
		ageexposure_tid_old = ageexposure_tid_new;
		
		
	});



	// Combine duplicate "Gender" rows
	
	var row_gender_counter = -1;
	var ageexposure_group = 1;
	var gender_rowspan_counter = 1;
	var gender_old = '';
	var gender_new = '';
	var gender_element = $('.view-outcomes-table .views-row-first .views-field-field-gender');
	
	$('.view-outcomes-table').find('.views-field-field-gender').each(function(){
				
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,7) == 'gender-') {
				var gender = classes[i].split('gender-')[1];
			}
		}
		
		gender_new = gender;
		var ageexposure_group_next = ageexposure_group + 1;
	
	
		if ((gender_new == gender_old) && ($(this).parent().hasClass('ageexposure-' + ageexposure_group))) {
			gender_rowspan_counter = gender_rowspan_counter + 1;
			$(this).parent().addClass('gender-' + row_gender_counter);
			gender_element.attr('rowspan' , gender_rowspan_counter);		
			$(this).remove();
		}
		else if (($(this).parent().hasClass('ageexposure-' + ageexposure_group_next))) {
			ageexposure_group = ageexposure_group_next;
			gender_rowspan_counter = 1;
			gender_element = $(this);
			row_gender_counter = row_gender_counter + 1;
			$(this).parent().addClass('gender-' + row_gender_counter);	
		}
		else {
			gender_rowspan_counter = 1;
			gender_element = $(this);
			row_gender_counter = row_gender_counter + 1;
			$(this).parent().addClass('gender-' + row_gender_counter);			
		}
		
		gender_old = gender_new;
		
		
	});
	
	
	// Combine duplicate "Outcome" rows
	
	var row_outcome_counter = -1;
	var gender_group = 1;
	var outcome_rowspan_counter = 1;
	var outcome_old = -1;
	var outcome_new = -1;
	var outcome_element = $('.view-outcomes-table .views-row-first .views-field-field-outcome');
	
	$('.view-outcomes-table').find('.views-field-field-outcome').each(function(){
				
		var classes = $(this).attr('class').split(/\s/);
		
		for (var i = 0; i < classes.length; i++) {
			if (classes[i].substr(0,8) == 'outcome-') {
				var outcome = classes[i].split('outcome-')[1];
			}
		}
		
		outcome_new = outcome;
		var gender_group_next = gender_group + 1;
	
	
		if ((outcome_new == outcome_old) && ($(this).parent().hasClass('gender-' + gender_group))) {
			outcome_rowspan_counter = outcome_rowspan_counter + 1;
			$(this).parent().addClass('outcome-' + row_outcome_counter);
			outcome_element.attr('rowspan' , outcome_rowspan_counter);			
			$(this).remove();
		}
		else if (($(this).parent().hasClass('gender-' + gender_group_next))) {
			gender_group = gender_group_next;
			outcome_rowspan_counter = 1;
			outcome_element = $(this);
			row_outcome_counter = row_outcome_counter + 1;
			$(this).parent().addClass('outcome-' + row_outcome_counter);
		}
		else {
			outcome_rowspan_counter = 1;
			outcome_element = $(this);
			row_outcome_counter = row_outcome_counter + 1;
			$(this).parent().addClass('outcome-' + row_outcome_counter);			
		}
		
		outcome_old = outcome_new;
		
		
	});






}














});
})(jQuery, Drupal, this, this.document);
