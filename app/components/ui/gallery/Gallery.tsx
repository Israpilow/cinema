import { FC } from 'react'

import styles from './Gallery.module.scss'
import GalleyItem from './GalleyItem'
import { IGalleryItem } from './gallery.interface'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleyItem key={item.link} item={item} variant="vertical" />
			))}
		</div>
	)
}

export default Gallery
