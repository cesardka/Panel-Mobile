import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full'},
	{ path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
	{ path: 'clientes', component: ClientesComponent, canActivate: [LoginGuard]},
	{ path: 'home', component: HomeComponent },
	{ path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],	
	exports: [RouterModule]
})
export class AppRoutingModule { }
