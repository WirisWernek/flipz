import { Routes } from "@angular/router";

export const AUTH_ROUTES: Routes = [
	{
		path: 'login',
		loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
	},
	{
		path: 'register',
		loadComponent: () => import('./criar-conta/criar-conta.component').then(c => c.CriarContaComponent),
	},
	{
		path: 'forgot-password',
		loadComponent: () => import('./recuperar-senha/recuperar-senha.component').then(c => c.RecuperarSenhaComponent),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'login'
	}
]