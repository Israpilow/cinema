import { FC } from 'react'

import Meta from '../../../../utils/meta/Meta'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import AdminHeader from '../../../ui/admin-table/AdminHeader'
import AdminTable from '../../../ui/admin-table/AdminTable/AdminTable'
import Heading from '../../../ui/heading/Heading'

import { useGenres } from './useGenres'

const GenreList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useGenres()
	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				tableItems={data || []}
				headerItems={['Name', 'Slug']}
				removeHandle={deleteAsync}
			/>
		</Meta>
	)
}

export default GenreList
