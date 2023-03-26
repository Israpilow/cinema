import { useQuery } from 'react-query'

import { useAuth } from '../../../hooks/useAuth'
import { UserService } from '../../../services/user.service'

export const useFavorite = () => {
	const { user } = useAuth()
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('get favorites', () => UserService.getFavorite(), {
		select: ({ data }) => data,
		enabled: !!user,
	})

	return { isLoading, favoritesMovies, refetch }
}
