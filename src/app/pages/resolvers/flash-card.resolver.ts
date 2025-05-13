import { inject } from '@angular/core'
import { Router, type ActivatedRouteSnapshot, type ResolveFn, type RouterStateSnapshot } from '@angular/router'
import { FlashCardApi } from '@api/flash-card.api'
import { FlashCardModel } from '@models/flash-card.model'

export const getFlashCardById: ResolveFn<FlashCardModel> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const navigation = inject(Router).getCurrentNavigation()
    const id = navigation?.extras?.state?.['id']
    if (!id) {
        return {} as FlashCardModel
    }
    return inject(FlashCardApi).getById(Number(id))
}
