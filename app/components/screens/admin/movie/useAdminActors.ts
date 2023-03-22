import { useQuery } from 'react-query'

import { ActorService } from '../../../../services/actor.service'
import { toastrError } from '../../../../utils/toastr-error'
import { IOption } from '../../../ui/select/select.inrerface'

export const useAdminActors = () => {
	const queryData = useQuery('List of actor', () => ActorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(actor): IOption => ({
					label: actor.name,
					value: actor._id,
				})
			),
		onError: (error) => {
			toastrError(error, 'Actor list')
		},
	})

	return queryData
}
