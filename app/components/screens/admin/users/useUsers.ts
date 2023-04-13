import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { getAdminUrl } from '../../../../config/url.config'
import { useDebounce } from '../../../../hooks/useDebounce'
import { UserService } from '../../../../services/user.service'
import { convertMongoDate } from '../../../../utils/date/convertMongoDate'
import { toastrError } from '../../../../utils/toastr-error'
import { ITableItem } from '../../../ui/admin-table/AdminTable/admin-table.intarface'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['user list', debouncedSearch],
		() => UserService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						items: [user.email, convertMongoDate(user.createdAt)],
					})
				),
			onError: (error) => {
				toastrError(error, 'User list')
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: string) => UserService.delete(userId),
		{
			onError: (error) => {
				toastrError(error, 'Delete user')
			},
			onSuccess: () => {
				toastr.success('Delete user', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create user',
		() => UserService.create(),
		{
			onError: (error) => {
				toastrError(error, 'Create user')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Create user', 'create was successful')
				push(getAdminUrl(`user/edit/${_id}`))
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
