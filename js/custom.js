(function($) {
	$(function() {
		//  open and close nav 
		$('#navbar-toggle').click(function() {
			$('nav ul').slideToggle();
		});
		// Hamburger toggle
		$('#navbar-toggle').on('click', function() {
			this.classList.toggle('active');
		});
		// If a link has a dropdown, add sub menu toggle.
		$('nav ul li h5:not(:only-child)').click(function(e) {
			$(this).siblings('.navbar-dropdown').slideToggle("slow");
			// Close dropdown when select another dropdown
			$('.navbar-dropdown').not($(this).siblings()).hide("slow");
			e.stopPropagation();
		});
		// Click outside the dropdown will remove the dropdown class
		$('html').click(function() {
			$('.navbar-dropdown').hide();
		});
	});
})(jQuery);
// Flexslider

$(document).ready(function() {
    $('.flexslider').flexslider({
        animation: "fade", // Use fade for smooth transition
        animationSpeed: 1000, // Adjust speed
        controlNav: true, // Show dots navigation
        directionNav: true, // Show prev/next arrows
        slideshow: true, // Enable autoplay
        start: function(slider) {
            // Set the zoom-in effect to images at the start (first slide)
            slider.slides.eq(slider.currentSlide).find('img').css({
                'transform': 'scale(1)', // Initial zoom for first slide
                'transition': 'transform 1s ease-in-out'
            });
            // Set text effect for the first slide
            slider.slides.eq(slider.currentSlide).find('.flex-caption').css({
                'opacity': 1,
                'transform': 'translateY(0)',
                'transition': 'opacity 1s ease-in-out, transform 1s ease-in-out'
            });
        },
        before: function(slider) {
            // Reset zoom on the current slide before transitioning
            slider.slides.eq(slider.currentSlide).find('img').css({
                'transform': 'scale(1.5)', // Reset zoom
                'transition': 'transform 1s ease-in-out'
            });
            // Hide text before transitioning
            slider.slides.eq(slider.currentSlide).find('.flex-caption').css({
                'opacity': 0, // Hide text
                'transform': 'translateY(90px)', // Move text down
                'transition': 'opacity 1s ease-in-out, transform 1s ease-in-out'
            });
        },
        after: function(slider) {
            // Apply zoom-in effect on the newly active image
            slider.slides.eq(slider.currentSlide).find('img').css({
                'transform': 'scale(1)', // Zoom in for the active slide
                'transition': 'transform 1s ease-in-out'
            });
            // Apply slide-up effect on the newly active text
            slider.slides.eq(slider.currentSlide).find('.flex-caption').css({
                'opacity': 1, // Make text visible
                'transform': 'translateY(0)', // Slide text into place
                'transition': 'opacity 1s ease-in-out, transform 1s ease-in-out'
            });
        }
    });
});


// scroll
$(document).ready(function() {
	//show hide button on scroll
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	//Smooth scrolling to top_social
	$('.scrollToTop').click(function() {
		$('html,body').animate({
			scrollTop: 0
		}, 2000)
	})
});
//accordion
var acc = document.getElementsByClassName("accordion");
var i;
for(i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active-accord");
		var panel = this.nextElementSibling;
		if(panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
//Sticky
$(window).scroll(function() {
	if($(this).scrollTop() > 100) {
		$('.wraphead').addClass('sticky')
	} else {
		$('.wraphead').removeClass('sticky')
	}
});
//Owl carousel

jQuery(document).ready(function($) {
	//  TESTIMONIALS CAROUSEL HOOK
	$('#customers-project').owlCarousel({
		loop: true,
		center: true,
		items: 2,
		margin: 0,
		autoplay: true,
		dots: true,
		nav: true,
		autoplayTimeout: 8500,
		smartSpeed: 450,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1170: {
				items: 3
			}
		}
	});
});

jQuery(document).ready(function($) {
	//  TESTIMONIALS CAROUSEL HOOK
	$('#customers-testimonials').owlCarousel({
		loop: true,
		center: true,
		items: 2,
		margin: 0,
		autoplay: true,
		dots: true,
		nav: true,
		autoplayTimeout: 9500,
		smartSpeed: 450,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1170: {
				items: 3
			}
		}
	});
});

//Contact Form Validation

var nameError = document.getElementById('name-error');
var companyError = document.getElementById('company-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var locationError = document.getElementById('location-error');
var submitError = document.getElementById('submit-error');

//name
function validateName(){
	var name = document.getElementById('contact-name').value;
  
	if(name.length==0){
	  nameError.innerHTML = 'Name is required';
	  return false;
	}
	if(!name.match(/^[a-zA-Z]+[a-zA-Z]+ [a-zA-Z]+[a-zA-Z]+$/)){ 
	  nameError.innerHTML = 'Write full name (Only First and Last Name';
	  return false;
	}
	nameError.innerHTML = '<i class="fa fa-check-circle"></i> ';
	return true;
  }

//company name
function validateCompany(){
	var company = document.getElementById('contact-company').value;
	if(company.length == 0) {
		companyError.innerHTML = 'Company Name is required';
		return false;
	}
	companyError.innerHTML = '<i class="fa fa-check-circle"></i> ';
	return true;
}

//Validate Email
function validateEmail() {
	var email = document.getElementById('contact-email').value;
	if(email.length == 0) {
		emailError.innerHTML = 'Email is required';
		return false;
	}
	if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		emailError.innerHTML = 'Please Enter a valid.';
		return false;
	}
	emailError.innerHTML = '<i class="fa fa-check-circle"></i> ';
	return true;
}
//Validate Phone
function validatePhone() {
	var phone = document.getElementById('contact-phone').value;
	if(phone.length == 0) {
		phoneError.innerHTML = 'Phone number is required';
		return false;
	}
	if(phone.length !== 10) {
		phoneError.innerHTML = 'Phone number should be 10 digits';
		return false;
	}
	if(!phone.match(/^[0-9]{10}$/)) {
		phoneError.innerHTML = 'Only digits please.';
		return false;
	}
	phoneError.innerHTML = '<i class="fa fa-check-circle"></i> ';
	return true;
}
//Validate Subject
function validateSubject() {
	var subject = document.getElementById('contact-subject').value;
	if(subject.length == 0) {
		subjectError.innerHTML = 'Sudject is required';
		return false;
	}
	if(!subject.match(/^[a-zA-Z]/)) {
		subjectError.innerHTML = 'Please Enter a valid.';
		return false;
	}
	subjectError.innerHTML = '<i class="fa fa-check-circle"></i> ';
	return true;
}
//Validate Location
function validateLocation() {
	var location = document.getElementById('contact-location').value;
	if(location.length == 0) {
		locationError.innerHTML = 'Location is required';
		return false;
	}
	if(!location.match(/^[a-zA-Z][a-zA-Z]/)) {
		locationError.innerHTML = 'Please Enter Your Location.';
		return false;
	}
	locationError.innerHTML = '<i class="fa fa-check-circle"></i> ';
	return true;
}
//Validate Message
function validateMessage() {
	var message = document.getElementById('contact-message').value;
	var required = 10;
	var left = required - message.length;
	if(left > 0) {
		messageError.innerHTML = left + ' or more characters required';
		return false;
	}
	messageError.innerHTML = '<i class="fa fa-check-circle"></i> ';
	return true;
}
//Validate Submit
function validateform() {
	if(!validateName() || !validateCompany() || !validateEmail() || !validatePhone() || !validateMessage()) {
		submitError.style.display = 'block';
		submitError.innerHTML = 'Please fix error to send message';
		setTimeout(function() {
			submitError.style.display = 'none';
		}, 3000);
		return false;
	}
}
//Submit Validator
let contact = document.querySelector("form"),
	statusTxt = contact.querySelector(".form-btn1 span");
contact.onsubmit = (e) => {
		e.preventDefault();
		statusTxt.style.color = "#0D6EFD";
		statusTxt.style.display = "block";
		statusTxt.innerText = "Sending your Quote...";
		contact.classList.add("disabled");
		let xhr = new XMLHttpRequest();
		xhr.open("POST", "contact-sent.php", true);
		xhr.onload = () => {
			if(xhr.readyState == 4 && xhr.status == 200) {
				let response = xhr.response;
				if(response.indexOf("Email required") != -1 || response.indexOf("Enter valid email") != -1 || response.indexOf("Sorry Message Failed") != -1) {
					statusTxt.style.color = "red";
				} else {
					contact.reset();
					setTimeout(() => {
						statusTxt.style.display = "none";
					}, 10000);
				}
				statusTxt.innerText = response;
				contact.classList.remove("disabled");
			}
		}
		let formData = new FormData(contact);
		xhr.send(formData);
	}

	//Disable
// $(document).ready(function() {
// 	//Disable cut copy paste
// 	$('body').bind('cut copy paste', function(e) {
// 		e.preventDefault();
// 		alert('Becareful we are watching you');
// 	});
// 	//Disable mouse right click
// 	$(document).ready(function() {
// 		$(document).bind("contextmenu", function(e) {
// 			alert('Becareful we are watching you');
// 			return false;
// 		});
// 	});
// });
// $(document).keydown(function(e) {
// 	if(e.which === 123) {
// 		alert('Becareful we are watching you')
// 		return false;
// 	}
// });
//Option URL
document.getElementById("selectLink").onchange = function() {
	var url = this.value;
	if(url) {
		window.location.href = url;
	}
};