import type { AppProps } from 'next/app'

import MainProvider from '../app/providers/MainProvider'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}
export default App
