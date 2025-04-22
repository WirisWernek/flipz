import { DeckModel } from "./deck.model"

export interface GrupoModel {
	id: number
	nome: string
	descricao: string
	colecaoId: number
	decks: DeckModel[]
}
