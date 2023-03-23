import { FC } from 'react'

import Meta from '../../../utils/meta/Meta'
import Gallery from '../../ui/gallery/Gallery'
import Heading from '../../ui/heading/Heading'
import SubHeading from '../../ui/heading/SubHeading'
import Slider from '../../ui/slider/Slider'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online for stream right to your browser."
		>
			<>
				<Heading title="Watch movies online" className="mb-8 text-xl" />

				{slides.length && <Slider slides={slides} />}

				<div className="my-10">
					<SubHeading title="Trending now" />
					{trendingMovies && <Gallery items={trendingMovies} />}
				</div>

				<div>
					<SubHeading title="Best actors" />
					{actors && <Gallery items={actors} />}
				</div>
			</>
		</Meta>
	)
}

export default Home
