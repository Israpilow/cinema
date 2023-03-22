import { useQuery } from 'react-query'

import { GenreService } from '../../../../services/genre.service'
import { toastrError } from '../../../../utils/toastr-error'
import { IOption } from '../../../ui/select/select.inrerface'

export const useAdminGenres = () => {
	const queryData = useQuery('List of genre', () => GenreService.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre): IOption => ({
					label: genre.name,
					value: genre._id,
				})
			),
		onError: (error) => {
			toastrError(error, 'Genre list')
		},
	})

	return queryData
}
