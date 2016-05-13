$(document).ready(function() {

$('form').submit(validateForm);

function validateForm() {
	event.preventDefault();

	var firstName = $('#firstName').val();
	if (firstName == '') {
		alert('You must enter your first name')
	}
	var lastName = $('#lastName').val();
	if (lastName == '') {
		alert('You must enter your last name')
	}

	if (firstName != '', lastName != '') {
		window.location.assign('thanks.html');
	}
	
}

$('.readmore').click(readMore);
$('.readless').hide(); 

function readMore() {
	event.preventDefault();
	$('#show-this-on-click').slideToggle();
	$('.readmore').hide();
	$('.readless').show();
}

$('.readless').click(readLess);

function readLess() {
	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('.readless').hide();
	$('.readmore').show();
}

function showThisOnClick() {
	$('#show-this-on-click').show().slideToggle;
	$('.readless').hide();
}

$('#show-this-on-click').hide();
$('#readMoreFunction').click(showThisOnClick);


});