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

function redirectLogin(code) {
	switch(code) {
		case "240006":
			window.location = "index.html";
			// $(location).attr("href" , "index.html");
			break;
		default:
			console.log("Codigo: " + code);
	}
}

// TODO:
// - Javascript para navbar ficar fixed no topo da tela ao realizar scroll