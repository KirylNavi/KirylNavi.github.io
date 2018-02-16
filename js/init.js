// Animate elements
$(document).ready(function(){
	new WOW().init({
		offset:  800
	});
});
// Form validate
$(document).ready(function(){

	$( "#form-1" ).validate({
		rules: {
			name: {
				required: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			phone: {
				required: "Введите Ваш номер телефона"
			},
			name: {
				required: "Введите Ваше имя"
			}
		},
		submitHandler: function(form) {
			var form_data = $(form).serialize();

			$.ajax({
	                    type: "POST", //Метод отправки
	                    url: "send.php", //путь до php фаила отправителя
	                    data: form_data,
	                    success: function() {
	                        //код в этом блоке выполняется при успешной отправке сообщения
	                        $(form).find("input:text").each(function () {
	                        	$(this).val("");
	                        });
	                        modal.hide();
	                        $.notify("Заявка была отправлена", "success");
	                    },
	                    error: function() {
	                    	$.notify("Заявка не была отправлена", "error");
	                    }
	                });
		}
	});

	$( "#form-2" ).validate({
		rules: {
			name: {
				required: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			phone: {
				required: "Введите Ваш номер телефона"
			},
			name: {
				required: "Введите Ваше имя"
			}
		},
		submitHandler: function(form) {
			var form_data = $(form).serialize();

			$.ajax({
	                    type: "POST", //Метод отправки
	                    url: "send.php", //путь до php фаила отправителя
	                    data: form_data,
	                    success: function() {
	                        //код в этом блоке выполняется при успешной отправке сообщения
	                        $(form).find("input:text").each(function () {
	                        	$(this).val("");
	                        });
	                        modal.hide();
	                        $.notify("Заявка была отправлена", "success");
	                    },
	                    error: function() {
	                    	$.notify("Заявка не была отправлена", "error");
	                    }
	                });
		}
	});
});