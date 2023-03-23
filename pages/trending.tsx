import { GetStaticProps, NextPage } from 'next'

import Catalog from '../app/components/ui/catalog-movies/Catalog'
import { MovieService } from '../app/services/movie.service'
import { IMovie } from '../app/shared/types/movies.types'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Trending movies"
			descriptions="Trending movie in excellent quality: legal, safe, without ads"
		/>
	)
}

export default TrendingPage

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getMostPopularMovies()

		return {
			props: {
				movies,
			},
		}
	} catch (e) {
		return {
			props: {
				movies: [],
			},
		}
	}
}
