import dynamic from 'next/dynamic'
import { FC } from 'react'

import { IMoviePage } from '../../../../pages/movie/[slug]'
import Meta from '../../../utils/meta/Meta'
import Banner from '../../ui/banner/Banner'
import Gallery from '../../ui/gallery/Gallery'
import SubHeading from '../../ui/heading/SubHeading'

import Content from './Content/Content'

const DynamicPlayer = dynamic(
	() => import('../../ui/video-player/VideoPlayer'),
	{
		ssr: false,
	}
)
const SingleMovie: FC<IMoviePage> = ({ similarMovie, movie }) => {
	return (
		<Meta title={movie?.title} description={`Watch ${movie?.title}`}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicPlayer slug={movie?.slug} videoSource={movie?.videoUrl} />
			<div className="mt-12">
				<SubHeading title="Similar" />
				<Gallery items={similarMovie} />
			</div>
		</Meta>
	)
}

export default SingleMovie
