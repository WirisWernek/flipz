import { Routes } from '@angular/router'
import { getFlashCardsByDeck } from '@resolvers/deck.resolver'

export const FLASH_CARD_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./list-flash-card/list-flash-card.component').then((c) => c.ListFlashCardComponent),
        resolve: { flashCards: getFlashCardsByDeck },
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    },
]
