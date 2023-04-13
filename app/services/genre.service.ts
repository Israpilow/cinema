import axios, { AxiosClassic } from '../api/interceptors'
import { IGenreEditInput } from '../components/screens/admin/genre/genre-edit.interface'
import { ICollection } from '../components/screens/collections/collections.interface'
import { getGenresUrl, getMoviesUrl } from '../config/api.config'
import { IGenre } from '../shared/types/movies.types'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return await AxiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getCollections() {
		return await AxiosClassic.get<ICollection[]>(getGenresUrl(`/collections`))
	},
	async getBySlug(slug: string) {
		return await AxiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},
	async getById(_id?: string) {
		return await axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},
	async create() {
		return axios.post<string>(getGenresUrl(''))
	},
	async update(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`/${_id}`), data)
	},
	async delete(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},
}
