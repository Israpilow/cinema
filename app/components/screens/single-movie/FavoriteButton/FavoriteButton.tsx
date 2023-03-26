import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { UserService } from '../../../../services/user.service'
import { toastrError } from '../../../../utils/toastr-error'
import { useFavorite } from '../../favorite/useFavorite'

import styles from './FavoriteButton.module.scss'
import HeartImage from './heart-animation.png'

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isSmashed, setIsSmashed] = useState(false)

	const { favoritesMovies, refetch } = useFavorite()

	useEffect(() => {
		if (!favoritesMovies) return

		const isHasMovie = favoritesMovies.some((f) => f._id === movieId)
		if (isSmashed !== isHasMovie) setIsSmashed(true)
	}, [favoritesMovies, movieId])

	const { mutateAsync } = useMutation(
		'add favorite',
		() => UserService.toggleFavorite(movieId),
		{
			onSuccess: () => {
				setIsSmashed(!isSmashed)
				refetch()
			},
			onError: (error) => {
				toastrError(error, 'Update Favorite favorite list')
			},
		}
	)

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.animate]: isSmashed,
			})}
			style={{ backgroundImage: `url(${HeartImage.src})` }}
		/>
	)
}

export default FavoriteButton
