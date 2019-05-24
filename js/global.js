// INDEX.HTML ---------------------------
function login() {
	var user = $('#form-user').val();
	var pass = $('#form-pass').val();

	$.ajax({
	    url: 'http://passport.alexandre.dev.com/auth',
	    data: {
				user: user,
				password: pass,
				client_code: "",
			},
	    type: 'POST',
	    success: function(data) {
	    	console.log("Success");
	    	console.log(data);
	    },
	    error: function(data) {
	    	console.log('Failed!');
	    	console.log(data);
	    },
	});
}

$('.orga-list').on('click', '.orga-item', function() {
	sessionStorage.setItem("client", $(this).attr('data-id'));
	// Request para conseguir a outra parte do token ---------------
	$.ajax({
		url: 'http://passport.alexandre.dev.com/client/token',
	    heade	s: {
			"Content-Type": "application/json",
			"auth-token": sessionStorage.getItem("utoken"),
			"Accept": "*/*",
			"Cache-Control": "no-cache",
	    },
	    data: JSON.stringify({"client_code": sessionStorage.getItem("client")}),
	    type: 'POST',
	success: function(response) {
		console.log(response["body"]["auth-token"]);
		if (response["body"] && response["body"]["auth-token"]) {
			sessionStorage.setItem("utoken", response["body"]["auth-token"]);
			$(location).attr('href', 'products.html');
		}
	},
	error: function(response) {
		console.log('Failed!');
		console.log(response);
	},
	});
});

// TODO:
// - Javascript para navbar ficar fixed no topo da tela ao realizar scroll