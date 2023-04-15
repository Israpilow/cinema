import fs from 'fs'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import path from 'path'

import Error404 from '../404'
import SingleMovie from '../../app/components/screens/single-movie/SingleMovie'
import { IGalleryItem } from '../../app/components/ui/gallery/gallery.interface'
import { getMovieUrl } from '../../app/config/url.config'
import { MovieService } from '../../app/services/movie.service'
import { IMovie } from '../../app/shared/types/movies.types'

export interface IMoviePage {
	similarMovie: IGalleryItem[]
	movie: IMovie
	movieUrl: string | null
}

const MoviePage: NextPage<IMoviePage> = ({ similarMovie, movie, movieUrl }) => {
	return movie ? (
		<SingleMovie
			similarMovie={similarMovie || []}
			movie={movie}
			movieUrl={movieUrl}
		/>
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
		const videoPath = path.join(
			`${process.env.APP_SERVER_URL}/api`,
			movie.videoUrl
		)

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

		if (!fs.existsSync(videoPath)) {
			return {
				props: {
					similarMovie,
					movie,
					movieUrl: null,
				},
				revalidate: 60,
			}
		} else {
			return {
				props: {
					similarMovie,
					movie,
					movieUrl: movie.videoUrl,
				},
				revalidate: 60,
			}
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}
