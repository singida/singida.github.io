$(document).ready(function() {

$('.readmore').click(readMore);
$('.readless').hide();

function readMore() {
	event.preventDefault();
	$('#show-this-on-click').slideToggle();
	$('.readmore').hide();
	$('readless').show();
}

$('readless').click(readLess);

function readLess() {
	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('.readless').hide();
	$('.readmore').show();
}

function showThisOnClick() {
	$('#showThisOnClick').show().slideToggle;
	$('.readless').hide();
}

$('#showThisOnClick').hide();
$('#readMoreFunction').click(showThisOnClick);


function validateForm() {
	event.preventDefault();

	var firstName = $('#firstName').val();
	if (firstName == '') {
		alert('You must enter your first name')
		return false;
	}
	var lastName = $('#lastName').val();
	if (lastName == '') {
		alert('You must enter your last name')
		return false;
	}

	if (firstName != '', lastName != '') {
		window.location.assign('thanks.html');
	}
	
}



});