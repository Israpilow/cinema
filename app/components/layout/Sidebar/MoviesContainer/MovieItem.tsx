import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getGenresUrl } from '../../../../config/api.config'
import { getMovieUrl } from '../../../../config/url.config'
import { IMovie } from '../../../../shared/types/movies.types'
import { getGenresListEach } from '../../../../utils/movie/getGenresListEach'
import MaterialIcon from '../../../ui/MaterialIcon'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					src={movie.poster}
					alt={movie.title}
					width={65}
					height={97}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genres}>
					{movie.genres.map((genre, idx) => (
						<Link key={idx} href={getGenresUrl(genre.slug)}>
							{getGenresListEach(idx, movie.genres.length, genre.name)}
						</Link>
					))}
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
