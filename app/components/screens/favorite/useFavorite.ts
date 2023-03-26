import { useQuery } from 'react-query'

import { UserService } from '../../../services/user.service'

export const useFavorite = () => {
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('get favorites', () => UserService.getFavorite(), {
		select: ({ data }) => data,
	})

	return { isLoading, favoritesMovies, refetch }
}
