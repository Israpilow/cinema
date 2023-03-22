import { GetStaticProps, NextPage } from 'next'

import Home from '../app/components/screens/home/Home'
import { IHome } from '../app/components/screens/home/home.interface'
import { ISlide } from '../app/components/ui/slider/slider.interace'
import { getMoviesUrl } from '../app/config/api.config'
import { MovieService } from '../app/services/movie.service'
import { getGenresList } from '../app/utils/movie/getGenresListEach'

const HomePage: NextPage<IHome> = ({ slides }) => {
	return <Home slides={slides} />
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMoviesUrl(m.slug),
			bigPoster: m.bigPoster,
			subTitle: getGenresList(m.genres),
			title: m.title,
		}))

		return {
			props: {
				slides,
			} as IHome,
		}
	} catch (error) {
		return {
			props: {
				slides: [],
			},
		}
	}
}
