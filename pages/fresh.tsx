import { GetStaticProps, NextPage } from 'next'

import Catalog from '../app/components/ui/catalog-movies/Catalog'
import { MovieService } from '../app/services/movie.service'
import { IMovie } from '../app/shared/types/movies.types'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Fresh movies"
			descriptions="New movie and series in excellent quality: legal, safe, without ads"
		/>
	)
}

export default FreshPage

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

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
