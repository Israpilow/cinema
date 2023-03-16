import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import { AdminService } from '../../../../services/admin.service'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import styles from '../Admin.module.scss'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	)
	return (
		<div className={cn(styles.block, styles.countUsers)}>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					<div className={cn(styles.number)}>{response?.data}</div>
				)}
				<div className={cn(styles.description)}>users</div>
			</div>
		</div>
	)
}

export default CountUsers
