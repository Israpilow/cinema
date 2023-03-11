import { AxiosClassic } from '../api/interceptors'
import { getMoviesUrl } from '../config/api.config'
import { IMovie } from '../shared/types/movies.types'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return await AxiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
}
