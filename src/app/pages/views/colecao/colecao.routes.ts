import { Routes } from "@angular/router";

export const COLECAO_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./list-colecao/list-colecao.component').then(c => c.ListColecaoComponent),
	},
	{
		path: 'form',
		loadComponent: () => import('./form-colecao/form-colecao.component').then(c => c.FormColecaoComponent),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
]