import { Routes } from "@angular/router";

export const DECK_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./list-deck/list-deck.component').then(c => c.ListDeckComponent),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
]