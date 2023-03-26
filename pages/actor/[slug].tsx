import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Error404 from '../404'
import Catalog from '../../app/components/ui/catalog-movies/Catalog'
import { ActorService } from '../../app/services/actor.service'
import { MovieService } from '../../app/services/movie.service'
import { IActor, IGenre, IMovie } from '../../app/shared/types/movies.types'

interface IActorPage {
	movies: IMovie[]
	actor: IActor | undefined
}

const ActorPage: NextPage<IActorPage> = ({ movies, actor }) => {
	return actor ? (
		<Catalog movies={movies || []} title={actor.name} />
	) : (
		<Error404 />
	)
}

export default ActorPage

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAll()

		const paths = actors.map((a) => ({
			params: {
				slug: a.slug,
			},
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: actor } = await ActorService.getBySlug(String(params?.slug))

		const { data: movies } = await MovieService.getByActor(actor._id)
		return {
			props: {
				movies,
				actor,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}
