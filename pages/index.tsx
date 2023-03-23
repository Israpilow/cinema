import { GetStaticProps, NextPage } from 'next'

import Home from '../app/components/screens/home/Home'
import { IHome } from '../app/components/screens/home/home.interface'
import { IGalleryItem } from '../app/components/ui/gallery/gallery.interface'
import { ISlide } from '../app/components/ui/slider/slider.interace'
import { getActorsUrl, getMoviesUrl } from '../app/config/api.config'
import { getActorUrl, getAdminUrl, getMovieUrl } from '../app/config/url.config'
import { ActorService } from '../app/services/actor.service'
import { MovieService } from '../app/services/movie.service'
import { getGenresList } from '../app/utils/movie/getGenresListEach'

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Home slides={slides} trendingMovies={trendingMovies} actors={actors} />
	)
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMoviesUrl(`/${m.slug}`),
			bigPoster: m.bigPoster,
			subTitle: getGenresList(m.genres),
			title: m.title,
		}))

		const dataTrendingMovies = await MovieService.getMostPopularMovies()

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 3)
			.map((movie) => ({
				name: movie.title,
				posterPath: movie.poster,
				link: getMovieUrl(movie.slug),
			}))

		const { data: dataActors } = await ActorService.getAll()

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((actor) => ({
			name: actor.name,
			posterPath: actor.photo,
			link: getActorUrl(actor.slug),
			content: {
				title: actor.name,
				subTitle: `+${actor.countMovies} movies`,
			},
		}))

		return {
			props: {
				slides,
				trendingMovies,
				actors,
			} as IHome,
		}
	} catch (error) {
		return {
			props: {
				slides: [],
				trendingMovies: [],
				actors: [],
			},
		}
	}
}
