// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){ 
	var searchterm = "Search...";
	// Add the value of "Search..." to the input field and a class of .empty
	$("#search_box").val(searchterm).addClass("empty");
	
	// When you click on #search
	$("#search_box").focus(function(){

		// If the value is equal to "Search..."s
		if($(this).val() == searchterm) {
			// remove all the text and the class of .empty
			$(this).val("").removeClass("empty");;
		}
		
	});

	$("#button").on('click',function () {

		if($("#search_box").val() === searchterm) {
			return;
		}

		window.location.replace("/?looking_for=" +  $("#search_box").val());
		
	});
	
	// When the focus on #search is lost
	$("#search_box").blur(function(){
		
		// If the input field is empty
		if($(this).val() == "") {
			// Add the text "Search..." and a class of .empty
			$(this).val("Search...").addClass("empty");	
		}
		
	});

});
