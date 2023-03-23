import UserEdit from '../../../../app/components/screens/admin/user/UserEdit'
import { NextPageAuth } from '../../../../app/shared/types/auth.types'

const UserEditPage: NextPageAuth = () => {
	return <UserEdit />
}

UserEditPage.isOnlyAdmin = true

export default UserEditPage
