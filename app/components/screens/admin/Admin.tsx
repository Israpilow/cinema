import { FC } from 'react'

import Meta from '../../../utils/meta/Meta'
import AdminNavigation from '../../ui/admin-navigation/AdminNavigation'
import Heading from '../../ui/heading/Heading'

import Statistics from './home/Statistics/Statistics'

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Some statistics" />
			<Statistics />
		</Meta>
	)
}

export default Admin
