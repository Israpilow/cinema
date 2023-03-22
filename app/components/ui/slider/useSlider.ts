import { useState } from 'react'

export const useSlider = (lingth: number) => {
	const [currentIdx, setCurrentIdx] = useState(0)
	const [slideIn, setSlideIn] = useState(true)

	const isExistsNext = currentIdx + 1 < lingth
	const isExistsPrev = currentIdx ? currentIdx - 1 < lingth : false

	const handleArrowClick = (diraction: 'next' | 'prev') => {
		const newIndex = diraction === 'next' ? currentIdx + 1 : currentIdx - 1
		setSlideIn(false)

		setTimeout(() => {
			setCurrentIdx(newIndex)
			setSlideIn(true)
		}, 300)
	}

	return {
		slideIn,
		handleClick: handleArrowClick,
		index: currentIdx,
		isNext: isExistsNext,
		isPrev: isExistsPrev,
	}
}
