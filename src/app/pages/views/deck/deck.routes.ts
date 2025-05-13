import { Routes } from '@angular/router'
import { getDecksByGrupo } from '@resolvers/grupo.resolver'

export const DECK_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./list-deck/list-deck.component').then((c) => c.ListDeckComponent),
        resolve: { decks: getDecksByGrupo },
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    },
]
