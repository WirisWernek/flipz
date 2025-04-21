import { Routes } from "@angular/router";

export const FLASH_CARD_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./list-flash-card/list-flash-card.component').then(c => c.ListFlashCardComponent),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
]