import { Routes } from '@angular/router'
import { getGruposByColecao } from '@resolvers/colecao.resolver'
import { getGrupoById } from '@resolvers/grupo.resolver'

export const GRUPO_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./list-grupo/list-grupo.component').then((c) => c.ListGrupoComponent),
        resolve: { grupos: getGruposByColecao },
    },
    {
        path: 'form',
        loadComponent: () => import('./form-grupo/form-grupo.component').then((c) => c.FormGrupoComponent),
        resolve: { grupo: getGrupoById },
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    },
]
