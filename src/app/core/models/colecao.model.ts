import { GrupoModel } from "./grupo.model"

export interface ColecaoModel {
	id: number
	nome: string
	descricao: string
	dataCriacao: Date
	usuarioId: number
	grupos: GrupoModel[]
}
