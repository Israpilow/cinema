import cn from 'classnames'
import { FC } from 'react'

import MaterialIcon from '../../MaterialIcon'

import styles from './SlideArrow.module.scss'

interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandle: () => void
}
const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandle }) => {
	const isLeft = variant === 'left'

	return (
		<button
			onClick={clickHandle}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
			aria-label={isLeft ? 'previus slide' : 'next slide'}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	)
}

export default SlideArrow
