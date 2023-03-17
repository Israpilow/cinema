import { FC } from 'react'

import Meta from '../../../../utils/meta/Meta'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import AdminHeader from '../../../ui/admin-table/AdminHeader'
import AdminTable from '../../../ui/admin-table/AdminTable/AdminTable'
import Heading from '../../../ui/heading/Heading'

import { useActors } from './useActors'

const ActorList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useActors()
	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				tableItems={data || []}
				headerItems={['Name', 'Count movies']}
				removeHandle={deleteAsync}
			/>
		</Meta>
	)
}

export default ActorList
