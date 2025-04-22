import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ColecaoModel } from '../models/colecao.model';


@Injectable({
  providedIn: 'root'
})
export class ColecaoApi {
	private readonly url = environment.API_URL + '/colecoes';
	private client = inject(HttpClient);

	get() { 
		return this.client.get<ColecaoModel[]>(this.url);
	}

	getById(id: number) {
		return this.client.get<ColecaoModel>(`${this.url}/${id}`);
	}

	post(colecao: ColecaoModel) {
		return this.client.post(this.url, colecao);
	}

	put(id: number, colecao: ColecaoModel) {
		return this.client.put(`${this.url}/${id}`, colecao);
	}

	delete(id: number) {
		return this.client.delete(`${this.url}/${id}`);
	}
  
}
