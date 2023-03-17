import { FC } from 'react'

import styles from '../../Admin.module.scss'

import CountUsers from './CountUsers'
import PopularUsers from './PopularUsers'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularUsers />
		</div>
	)
}

export default Statistics
