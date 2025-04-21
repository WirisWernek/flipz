import { Routes } from "@angular/router";

export const GRUPO_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./list-grupo/list-grupo.component').then(c => c.ListGrupoComponent),
	},
	{
		path: 'form',
		loadComponent: () => import('./form-grupo/form-grupo.component').then(c => c.FormGrupoComponent),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
]