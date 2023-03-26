import { FC } from 'react'

import { useAuth } from '../../../hooks/useAuth'
import Meta from '../../../utils/meta/Meta'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Heading from '../../ui/heading/Heading'

import styles from './Favorites.module.scss'
import FavoritesItem from './FavoritesItem'
import { useFavorite } from './useFavorite'

const Favorites: FC = () => {
	const { isLoading, favoritesMovies } = useFavorite()
	const { user } = useAuth()
	if (!user) return null
	return (
		<Meta title="Favorite">
			<Heading title="Favorites" />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoritesMovies?.map((movie) => (
						<FavoritesItem key={movie._id} movie={movie} />
					))
				)}
			</section>
		</Meta>
	)
}

export default Favorites
