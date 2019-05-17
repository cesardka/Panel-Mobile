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