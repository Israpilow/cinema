export const getGenresListEach = (
	index: number,
	length: number,
	name: string
) => (index + 1 === length ? name : name + ', ')

interface IGetGenresList {
	name: string
}

export const getGenresList = (array: IGetGenresList[]) =>
	array.map((i) => i.name).join(', ')
