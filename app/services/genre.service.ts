import axios, { AxiosClassic } from '../api/interceptors'
import { getGenresUrl, getMoviesUrl } from '../config/api.config'
import { IGenre } from '../shared/types/movies.types'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return await AxiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},
}
