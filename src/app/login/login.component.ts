import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

	email = new FormControl('', [Validators.required, Validators.email]);
	password = new FormControl('', Validators.required);

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
  		//console.log('email: '+ this.email.value + ", status: " + this.email.status);
  		//console.log('password: '+ this.password.value + ", status: " + this.password.status);

  		this.emailInput = { "error" : this.email.status == "INVALID" }
  		this.passwordInput = { "error" : this.password.status == "INVALID" }

  		this.passportService.auth(this.email.value, this.password.value).subscribe(data => {
  			console.log(data)
  			if (data.code == "480001") {
  				console.log(data.code);
  				localStorage.setItem("token", data.body["auth-token"]);
  				this.router.navigate(['/clientes']);
  			}
  		});
  	}

}
