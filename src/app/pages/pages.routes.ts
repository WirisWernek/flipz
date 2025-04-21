import { Routes } from "@angular/router";

export const PAGES_ROUTES: Routes = [
	{
		path: 'auth',
		loadComponent: () => import('./layouts/auth/auth.component').then(c => c.AuthComponent),
		loadChildren: () => import('./views/auth/auth.routes').then(r => r.AUTH_ROUTES)
	},
	{
		path: 'colecao',
		loadComponent: () => import('./layouts/default/default.component').then(c => c.DefaultComponent),
		loadChildren: () => import('./views/colecao/colecao.routes').then(r => r.COLECAO_ROUTES)
	},
	{
		path: 'grupo',
		loadComponent: () => import('./layouts/default/default.component').then(c => c.DefaultComponent),
		loadChildren: () => import('./views/grupo/grupo.routes').then(r => r.GRUPO_ROUTES)
	},
	{
		path: 'deck',
		loadComponent: () => import('./layouts/default/default.component').then(c => c.DefaultComponent),
		loadChildren: () => import('./views/deck/deck.routes').then(r => r.DECK_ROUTES)
	},
	{
		path: 'flash-card',
		loadComponent: () => import('./layouts/default/default.component').then(c => c.DefaultComponent),
		loadChildren: () => import('./views/flash-card/flash-card.routes').then(r => r.FLASH_CARD_ROUTES)
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'auth'
	}
]