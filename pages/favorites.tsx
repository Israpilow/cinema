import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicFavorites = dynamic(
	() => import('../app/components/screens/favorite/Favorites'),
	{ ssr: false }
)

const FavoritesPage: NextPage = () => {
	return <DynamicFavorites />
}

export default FavoritesPage
