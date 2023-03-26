import Image from 'next/image'
import { FC } from 'react'

import styles from './Banner.module.scss'
import { IBanner } from './banner.interface'

const Banner: FC<IBanner> = ({ image, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				sizes="100vw"
				src={image}
				alt=""
				draggable={false}
				fill
				className="image-like-bg"
				unoptimized
				priority
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
