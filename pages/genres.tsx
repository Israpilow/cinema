import { GetStaticProps, NextPage } from 'next'

import Collections from '../app/components/screens/collections/Collections'
import { ICollection } from '../app/components/screens/collections/collections.interface'
import { GenreService } from '../app/services/genre.service'

import Error404 from './404'

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return collections ? (
		<Collections collections={collections || []} />
	) : (
		<Error404 />
	)
}

export default GenresPage

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()

		return {
			props: {
				collections,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
