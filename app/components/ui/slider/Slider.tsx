import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import styles from './Slider.module.scss'
import { useSlider } from './useSlider'

interface ISlider {
	slides: ISlider[]
	buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const { handleClick, slideIn, isNext, isPrev, index } = useSlider(
		slides.length
	)

	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				classNames="slide-animation"
				timeout={300}
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>
			{isPrev && (
				<SlideArrow variant="left" clickHandle={() => handleClick('prev')} />
			)}
			{isNext && (
				<SlideArrow variant="right" clickHandle={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
