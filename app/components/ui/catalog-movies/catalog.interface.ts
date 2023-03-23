import { IMovie } from '../../../shared/types/movies.types'

export interface ICatalog {
	movies: IMovie[]
	title: string
	descriptions?: string
}
