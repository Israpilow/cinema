import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '../../../config/url.config'
import { IMovie } from '../../../shared/types/movies.types'
import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

import styles from './Favorites.module.scss'

const FavoritesItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movieId={movie._id} />
			<Link href={getMovieUrl(movie.slug)} className={styles.item}>
				<Image
					src={movie.bigPoster}
					alt={movie.title}
					layout="fill"
					draggable={false}
					priority
				/>

				<div className={styles.title}>{movie.title}</div>
			</Link>
		</div>
	)
}

export default FavoritesItem
