import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, type ResolveFn } from '@angular/router'
import { ColecaoApi } from '@api/colecao.api'
import { ColecaoModel } from '@models/colecao.model'
import { GrupoModel } from '@models/grupo.model'

export const getColecaoById: ResolveFn<ColecaoModel> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const navigation = inject(Router).getCurrentNavigation()
    const id = navigation?.extras?.state?.['id']
    if (!id) {
        return {} as ColecaoModel
    }
    return inject(ColecaoApi).getById(Number(id))
}

export const getGruposByColecao: ResolveFn<GrupoModel[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const navigation = inject(Router).getCurrentNavigation()
    const id = navigation?.extras?.state?.['id']
    console.log('getGruposByColecao', id)
    if (!id) {
        return [] as GrupoModel[]
    }
    return inject(ColecaoApi).getGruposByColecao(Number(id))
}
