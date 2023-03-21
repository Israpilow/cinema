import axios, { AxiosClassic } from '../api/interceptors'
import { IActorEditInput } from '../components/screens/admin/actor/actor-edit.interface'
import { getActorsUrl, getGenresUrl } from '../config/api.config'
import { IActor } from '../shared/types/movies.types'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return await AxiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getById(_id?: string) {
		return await axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},
	async create() {
		return axios.post<string>(getActorsUrl('/'))
	},
	async update(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},
	async delete(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},
}
