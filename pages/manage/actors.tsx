import ActorList from '../../app/components/screens/admin/actors/ActorList'
import { NextPageAuth } from '../../app/shared/types/auth.types'

const ActorListPage: NextPageAuth = () => {
	return <ActorList />
}

ActorListPage.isOnlyAdmin = true

export default ActorListPage
