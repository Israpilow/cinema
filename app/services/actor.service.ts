import axios, { AxiosClassic } from '../api/interceptors'
import { getActorsUrl } from '../config/api.config'
import { IActor } from '../shared/types/movies.types'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return await AxiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async deleteActor(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},
}
