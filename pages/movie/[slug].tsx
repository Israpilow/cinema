import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Error404 from '../404'
import SingleMovie from '../../app/components/screens/single-movie/SingleMovie'
import Catalog from '../../app/components/ui/catalog-movies/Catalog'
import { IGalleryItem } from '../../app/components/ui/gallery/gallery.interface'
import { getMovieUrl } from '../../app/config/url.config'
import { MovieService } from '../../app/services/movie.service'
import { IMovie } from '../../app/shared/types/movies.types'

export interface IMoviePage {
	similarMovie: IGalleryItem[]
	movie: IMovie | undefined
}

const MoviePage: NextPage<IMoviePage> = ({ similarMovie, movie }) => {
	return movie ? (
		<SingleMovie similarMovie={similarMovie || []} movie={movie} />
	) : (
		<Error404 />
	)
}

export default MoviePage

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		const paths = movies.map((a) => ({
			params: {
				slug: a.slug,
			},
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))

		const { data: dataSimilarMovie } = await MovieService.getByGenres(
			movie.genres.map((g) => g._id)
		)

		const similarMovie = dataSimilarMovie
			.filter((m) => m._id !== movie._id)
			.map((g) => ({
				name: g.title,
				posterPath: g.poster,
				link: getMovieUrl(g.slug),
			}))

		return {
			props: {
				similarMovie,
				movie,
			},
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}
