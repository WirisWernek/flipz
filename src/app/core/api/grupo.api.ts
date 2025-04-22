import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { environment } from '../../../environments/environment.development'
import { GrupoModel } from '../models/grupo.model'


@Injectable({
    providedIn: 'root',
})
export class GrupoApi {
    private readonly url = environment.API_URL + '/grupos'
    private client = inject(HttpClient)

    get() {
        return this.client.get<GrupoModel>(this.url)
    }

    getById(id: number) {
        return this.client.get<GrupoModel>(`${this.url}/${id}`)
    }

    post(grupo: GrupoModel) {
        return this.client.post(this.url, grupo)
    }

    put(id: number, grupo: GrupoModel) {
        return this.client.put(`${this.url}/${id}`, grupo)
    }

    delete(id: number) {
        return this.client.delete(`${this.url}/${id}`)
    }
}
