import ActorEdit from '../../../../app/components/screens/admin/actor/ActorEdit'
import { NextPageAuth } from '../../../../app/shared/types/auth.types'

const ActorEditPage: NextPageAuth = () => {
	return <ActorEdit />
}

ActorEditPage.isOnlyAdmin = true

export default ActorEditPage
