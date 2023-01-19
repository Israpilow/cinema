import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '../../../assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/" className="px-layout mb-10 block">
			<Image src={logo} width="247" height="34" alt="logo" draggable={false} />
		</Link>
	)
}
export default Logo
