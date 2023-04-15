import { FC } from 'react'

import AuthButton from './AuthButton'
import styles from './AuthPlaceholder.module.scss'

const AuthPlaceholder: FC<{ slug?: string; text?: string }> = ({
	slug,
	text,
}) => {
	return (
		<div className={styles.placeholder}>
			<div>
				{text ? (
					<div>{text}</div>
				) : (
					<>
						<div>You must be logged in to start watching</div>
						{slug && <AuthButton slug={slug} />}
					</>
				)}
			</div>
		</div>
	)
}

export default AuthPlaceholder
