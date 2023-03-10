import { NextPage } from 'next'

import Meta from '../../../utils/meta/Meta'
import Heading from '../../ui/heading/Heading'

const Home: NextPage = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online for stream right to your browser."
		>
			<Heading title="Watch movies online" className="mb-8 text-xl" />
		</Meta>
	)
}

export default Home
