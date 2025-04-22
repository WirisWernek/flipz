import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { environment } from '../../../environments/environment.development'
import { DeckModel } from '../models/deck.model'

@Injectable({
    providedIn: 'root',
})
export class DeckApi {
    private readonly url = environment.API_URL + '/decks'
    private client = inject(HttpClient)

    get() {
        return this.client.get<DeckModel[]>(this.url)
    }

    getById(id: number) {
        return this.client.get<DeckModel>(`${this.url}/${id}`)
    }

    post(deck: DeckModel) {
        return this.client.post(this.url, deck)
    }

    put(id: number, deck: DeckModel) {
        return this.client.put(`${this.url}/${id}`, deck)
    }

    delete(id: number) {
        return this.client.delete(`${this.url}/${id}`)
    }
}
