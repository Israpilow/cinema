import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '../../../../../config/url.config'
import { IMovie } from '../../../../../shared/types/movies.types'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={getMovieUrl(movie.slug)}>
						<Image
							sizes="100vw"
							src={movie.poster}
							alt={movie.title}
							width={50}
							height={50}
							draggable={false}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found</div>
			)}
		</div>
	)
}

export default SearchList
