jQuery(document).ready(function($){
	
	//open the lateral panel 1
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	//close the lateral panel 1
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
	//close the lateral panel 1 (from contact)
	$('.panel-contact').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});


	//open the lateral panel 2
	$('.cd-btn-2').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-2').addClass('is-visible');
	});
	//close the lateral panel 2
	$('.cd-panel-2').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-2').removeClass('is-visible');
			event.preventDefault();
		}
	});

	//open the lateral panel 3
	$('.cd-btn-3').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-3').addClass('is-visible');
	});
	//close the lateral panel 3
	$('.cd-panel-3').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-3').removeClass('is-visible');
			event.preventDefault();
		}
	});

	//open the lateral panel 4
	$('.cd-btn-4').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-4').addClass('is-visible');
	});
	//close the lateral panel 4
	$('.cd-panel-4').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-4').removeClass('is-visible');
			event.preventDefault();
		}
	});
});