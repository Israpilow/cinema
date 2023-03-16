import Admin from '../../app/components/screens/admin/Admin'
import { NextPageAuth } from '../../app/shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isOnlyAdmin = true

export default AdminPage
