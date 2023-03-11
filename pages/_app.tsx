import type { AppProps } from 'next/app'

import '../app/assets/styles/globals.scss'
import MainProvider from '../app/providers/MainProvider'

function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}
export default App
