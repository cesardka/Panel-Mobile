import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PassportService } from '../passport.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  	entrar = 'Entrar';

	loginForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', Validators.required)
	});

	/* Classes de validação do input */
	emailInput = { "error" : false }
	passwordInput = { "error" : false }

	constructor(
		private router: Router,
		private passportService: PassportService,
		private location: Location
	) { }

	ngOnInit() {}

	login(): void {
		console.log(
			"email =", this.loginForm.value['email'] + "\n" + 
			"senha =", this.loginForm.value['password']
		);
  		this.passportService.auth(this.loginForm.value['email'], this.loginForm.value['password']).subscribe(data => {
  			console.log(data)
  			if (data.code != "480001") {
				alert("Erro de autenticação!");
				return false;
			}
			localStorage.setItem("token", data.body["auth-token"]);
			this.router.navigate(['/clientes']);
  		});
  	}

}
