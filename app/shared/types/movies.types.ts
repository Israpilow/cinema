import { TypeMaterialIconName } from './icons.types'

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: TypeMaterialIconName
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	_id: string
	name: string
	photo: string
	countMovies: string
	slug: string
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	rating: number
	genres: IGenre[]
	countOpened: number
	videoUrl: string
	actors: IActor[]
	slug: string
	parameters: IParameters
}
