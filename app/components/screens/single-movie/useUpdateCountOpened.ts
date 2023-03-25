import { useEffect } from 'react'
import { useMutation } from 'react-query'

import { MovieService } from '../../../services/movie.service'
import { toastrError } from '../../../utils/toastr-error'

export const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync } = useMutation('update count movie', () =>
		MovieService.updateCountOpened(slug)
	)

	useEffect(() => {
		mutateAsync()
	}, [])
}
