;(function ($) {
	'use strict';
	var $toggler = $('#navbar-toggler');

    $toggler.on("click" ,function(){
        $(this).toggleClass('active');
    });

    $("#digitalForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            company: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            firstname: "Please enter your Firstname",
            lastname: "Please enter your Lastname",
            lastname: "Please enter your Company",
            email: "Please enter a valid email address"
        },
        invalidHandler: function(event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {

              var message = 'Your request could not yet be sent. <br> Please fill out the *required fields.';
             
              $("div.error span").html(message);
              $("div.error").show();
            } else {
              $("div.error").hide();
            }
        }
    });

})(jQuery);
