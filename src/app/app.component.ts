import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PassportService } from './passport.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	entrar = 'Entrar';

	email = new FormControl('', [Validators.required, Validators.email]);
	password = new FormControl('', Validators.required);

	/* Classes de validação do input */
	emailInput = { "error" : false }
	passwordInput = { "error" : false }

	constructor(private passportService: PassportService) { }

	login(): void {
  		//console.log('email: '+ this.email.value + ", status: " + this.email.status);
  		//console.log('password: '+ this.password.value + ", status: " + this.password.status);

  		this.emailInput = { "error" : this.email.status == "INVALID" }
  		this.passwordInput = { "error" : this.password.status == "INVALID" }

  		this.passportService.auth(this.email.value, this.password.value).subscribe(data => {console.log(data)});
  	}
}