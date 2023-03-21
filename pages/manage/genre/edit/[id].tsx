import GenreEdit from '../../../../app/components/screens/admin/genre/GenreEdit'
import { NextPageAuth } from '../../../../app/shared/types/auth.types'

const GenreEditPage: NextPageAuth = () => {
	return <GenreEdit />
}

GenreEditPage.isOnlyAdmin = true

export default GenreEditPage
