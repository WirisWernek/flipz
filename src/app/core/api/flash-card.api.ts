import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { environment } from '@environments/environment.development'
import { FlashCardModel } from '@models/flash-card.model'

@Injectable({
    providedIn: 'root',
})
export class FlashCardApi {
    private readonly url = environment.API_URL + '/flashcards'
    private client = inject(HttpClient)

    get() {
        return this.client.get<FlashCardModel[]>(this.url)
    }

    getById(id: number) {
        return this.client.get<FlashCardModel>(`${this.url}/${id}`)
    }

    post(flashCard: FlashCardModel) {
        return this.client.post(this.url, flashCard)
    }

    put(id: number, flashCard: FlashCardModel) {
        return this.client.put(`${this.url}/${id}`, flashCard)
    }

    delete(id: number) {
        return this.client.delete(`${this.url}/${id}`)
    }
}
