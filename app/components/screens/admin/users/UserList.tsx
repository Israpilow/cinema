import { FC } from 'react'

import Meta from '../../../../utils/meta/Meta'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import AdminHeader from '../../../ui/admin-table/AdminHeader'
import AdminTable from '../../../ui/admin-table/AdminTable/AdminTable'
import Heading from '../../../ui/heading/Heading'

import { useUsers } from './useUsers'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()
	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				tableItems={data || []}
				headerItems={['Email', 'Date register']}
				removeHandle={deleteAsync}
			/>
		</Meta>
	)
}

export default UserList
