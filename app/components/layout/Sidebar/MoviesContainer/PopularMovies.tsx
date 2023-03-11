import { FC } from 'react'
import { useQuery } from 'react-query'

import { MovieService } from '../../../../services/movie.service'
import SkeletonLoader from '../../../ui/SkeletonLoader'

import MovieList from './MovieList'

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery('Popular movies', () =>
		MovieService.getMostPopularMovies()
	)
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			title="Popular Movies"
			movies={popularMovies || []}
			link="/trending"
		/>
	)
}

export default PopularMovies
