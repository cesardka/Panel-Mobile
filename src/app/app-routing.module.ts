import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full'},
	{ path: 'login', component: LoginComponent},
	{ path: 'clientes', component: ClientesComponent},
	{ path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],	
	exports: [RouterModule]
})
export class AppRoutingModule { }
