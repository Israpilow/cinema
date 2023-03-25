import axios, { AxiosClassic } from '../api/interceptors'
import { IMovieEditInput } from '../components/screens/admin/movie/movie-edit.interface'
import { getGenresUrl, getMoviesUrl } from '../config/api.config'
import { getMovieUrl } from '../config/url.config'
import { IActor, IGenre, IMovie } from '../shared/types/movies.types'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return await AxiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getMostPopularMovies() {
		const { data: movies } = await AxiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},
	async getByGenres(genreIds: string[]) {
		return await AxiosClassic.post<IMovie[]>(getMoviesUrl(`/by-genres`), {
			genreIds,
		})
	},
	async getBySlug(slug: string) {
		return await AxiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
	},
	async getByActor(actorId: string) {
		return await AxiosClassic.get<IActor>(getMoviesUrl(`/by-actor/${actorId}`))
	},
	async getById(_id?: string) {
		return await axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},
	async create() {
		return axios.post<string>(getMoviesUrl('/'))
	},
	async update(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getMoviesUrl(`/${_id}`), data)
	},
	async delete(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},
	async updateCountOpened(slug: string) {
		return await AxiosClassic.post<string>(
			getMoviesUrl(`/update-count-opened`),
			{ slug }
		)
	},
}
