import { FC } from 'react'

import { getMoviesUrl } from '../../../config/api.config'
import { getMovieUrl } from '../../../config/url.config'
import Meta from '../../../utils/meta/Meta'
import GalleyItem from '../gallery/GalleyItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'

import styles from './Catalog.module.scss'
import { ICatalog } from './catalog.interface'

const Catalog: FC<ICatalog> = ({ movies, title, descriptions }) => {
	return (
		<Meta title={title} description={descriptions}>
			<>
				<Heading title={title} className={styles.heading} />

				{descriptions && (
					<Description text={descriptions} className={styles.description} />
				)}

				<section className={styles.movies}>
					{movies.map((movie) => (
						<GalleyItem
							key={movie._id}
							item={{
								name: movie.title,
								link: getMovieUrl(movie.slug),
								posterPath: movie.bigPoster,
								content: {
									title: movie.title,
								},
							}}
							variant="horizontal"
						/>
					))}
				</section>
			</>
		</Meta>
	)
}

export default Catalog
