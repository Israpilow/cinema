import Head from 'next/head'
import NextProviderBar from 'nextjs-progressbar'
import { FC, ReactElement } from 'react'

import { acceptColor } from '../../config/constants'

import FavIcons from './FavIcons'

const HeadProvider: FC<{ children: ReactElement }> = ({ children }) => {
	return (
		<>
			<NextProviderBar
				color={acceptColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" />
				<meta content="width=device-width, initial-scale=1, maximum-scale=1.0" />

				<FavIcons />
				<meta name="theme-color" content={'#181B1E'} />
				<meta name="msapplication-navbutton-color" content={'#181B1E'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
