import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PassportService {

	//public token: string;
	private url = 'http://passport.alexandre.dev.com/auth';

	constructor(private http: HttpClient) {
		//const user = JSON.parse(localStorage.getItem('user'));
		//this.token = user && user.token;
	}

	auth(email:string, password: string): Observable<any> {
		return this.http.post<any>(this.url, {user: email, password: password, client_code: ''});
		//.pipe(
        	//map(data => {
	          	// login bem-sucedido se houver um token jwt na resposta
	          	//if (user && user.token) {
	            	// armazenar detalhes do usuário e token jwt no localStorage para manter o usuário logado entre as atualizações da página
	            	//localStorage.setItem('utoken', data.body['auth-token']);
	          	//}

	          	//return data;
	        //})
      	//);
	}

	Get(id: number) {
		return id;
	}
}
