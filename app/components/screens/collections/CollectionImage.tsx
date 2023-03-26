import Image from 'next/image'
import { FC } from 'react'

import { ICollection } from './collections.interface'

const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title },
}) => {
	return (
		<Image
			sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
			fill
			src={image}
			alt={title}
			draggable={false}
			priority
		/>
	)
}

export default CollectionImage
