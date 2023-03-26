import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Error404 from '../404'
import Catalog from '../../app/components/ui/catalog-movies/Catalog'
import { GenreService } from '../../app/services/genre.service'
import { MovieService } from '../../app/services/movie.service'
import { IGenre, IMovie } from '../../app/shared/types/movies.types'

interface IGenrePage {
	movies: IMovie[]
	genre: IGenre | undefined
}

const GenrePage: NextPage<IGenrePage> = ({ movies, genre }) => {
	return genre ? (
		<Catalog
			movies={movies || []}
			title={genre.name}
			descriptions={genre.description}
		/>
	) : (
		<Error404 />
	)
}

export default GenrePage

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenreService.getAll()

		const paths = genres.map((g) => ({
			params: {
				slug: g.slug,
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
		const { data: genre } = await GenreService.getBySlug(String(params?.slug))

		const { data: movies } = await MovieService.getByGenres([genre._id])
		return {
			props: {
				movies,
				genre,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}
