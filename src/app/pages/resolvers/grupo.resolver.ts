import { inject } from '@angular/core'
import { Router, type ActivatedRouteSnapshot, type ResolveFn, type RouterStateSnapshot } from '@angular/router'
import { GrupoApi } from '@api/grupo.api'
import { DeckModel } from '@models/deck.model'
import { GrupoModel } from '@models/grupo.model'

export const getDecksByGrupo: ResolveFn<DeckModel[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const navigation = inject(Router).getCurrentNavigation()
    const id = navigation?.extras?.state?.['id']
    if (!id) {
        return [] as DeckModel[]
    }
    return inject(GrupoApi).getDecksByGrupo(Number(id))
}

export const getGrupoById: ResolveFn<GrupoModel> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const navigation = inject(Router).getCurrentNavigation()
    const id = navigation?.extras?.state?.['id']
    if (!id) {
        return {} as GrupoModel
    }
    return inject(GrupoApi).getById(Number(id))
}
