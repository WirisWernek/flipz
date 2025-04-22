import { FlashCardModel } from "./flash-card.model"

export interface DeckModel {
	id: number
	nome: string
	descricao: string
	grupoId: number
	flashCards: FlashCardModel[]
}
