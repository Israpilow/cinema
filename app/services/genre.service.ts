import { AxiosClassic } from '../api/interceptors'
import { getGenresUrl } from '../config/api.config'
import { IGenre } from '../shared/types/movies.types'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return await AxiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
}
