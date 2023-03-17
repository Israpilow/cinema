import MovieList from '../../app/components/screens/admin/movies/MovieList'
import { NextPageAuth } from '../../app/shared/types/auth.types'

const MovieListPage: NextPageAuth = () => {
	return <MovieList />
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage
