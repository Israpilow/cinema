import { FC } from 'react'

import Meta from '../../../utils/meta/Meta'
import Heading from '../../ui/heading/Heading'
import Slider from '../../ui/slider/Slider'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ slides }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online for stream right to your browser."
		>
			<Heading title="Watch movies online" className="mb-8 text-xl" />

			{slides.length && <Slider slides={slides} />}
		</Meta>
	)
}

export default Home
