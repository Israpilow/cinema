import axios from '../api/interceptors'
import { getUsersUrl } from '../config/api.config'
import { IUser } from '../shared/types/user.types'

export const UserService = {
	async getAll(searchTerm?: string) {
		return await axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async create() {
		return axios.post<string>(getUsersUrl('/'))
	},

	async delete(_id: string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	},
}
