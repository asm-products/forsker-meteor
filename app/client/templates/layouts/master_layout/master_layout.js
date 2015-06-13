Template.MasterLayout.helpers({

});

Template.MasterLayout.events({
	"click [data-toggle=offcanvas]": function (event, template) {
	  	$(this).toggleClass('visible-xs text-center');
	    $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
	    $('.row-offcanvas').toggleClass('active');
	    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
	    $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
	    $('#btnShow').toggle();
	}
});

// $('[data-toggle=offcanvas]').click(function() {
//   	$(this).toggleClass('visible-xs text-center');
//     $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
//     $('.row-offcanvas').toggleClass('active');
//     $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
//     $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
//     $('#btnShow').toggle();
// });