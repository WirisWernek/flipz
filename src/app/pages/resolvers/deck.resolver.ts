import { inject } from '@angular/core'
import { Router, type ActivatedRouteSnapshot, type ResolveFn, type RouterStateSnapshot } from '@angular/router'
import { DeckApi } from '@api/deck.api'
import { DeckModel } from '@models/deck.model'
import { FlashCardModel } from '@models/flash-card.model'

export const getFlashCardsByDeck: ResolveFn<FlashCardModel[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const navigation = inject(Router).getCurrentNavigation()
    const id = navigation?.extras?.state?.['id']
    if (!id) {
        return [] as FlashCardModel[]
    }
    return inject(DeckApi).getFlashCardsByDeck(Number(id))
}

export const getDeckById: ResolveFn<DeckModel> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const navigation = inject(Router).getCurrentNavigation()
    const id = navigation?.extras?.state?.['id']
    if (!id) {
        return {} as DeckModel
    }
    return inject(DeckApi).getById(Number(id))
}
