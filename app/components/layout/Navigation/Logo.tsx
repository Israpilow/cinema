import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '../../../assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/" className="px-layout mb-10 block">
			<Image
				src={logo}
				width="0"
				height="0"
				sizes="100vw"
				style={{ width: '100%', height: 'auto' }}
				alt="logo"
				draggable={false}
			/>
		</Link>
	)
}
export default Logo
