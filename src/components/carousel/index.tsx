import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FunctionComponent } from 'react'
import './style.scss'
interface Props {
	img: string[]
	setNum: React.Dispatch<React.SetStateAction<number>>
}

export const Carousel: FunctionComponent<Props> = ({ img, setNum }) => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		speed: 500,
		beforeChange: (current: number, next: number) => {
			setNum(next)
		},
	}

	return (
		<>
			<Slider {...settings}>
				{img.map(item => (
					<div className='img-pizza' key={Math.random()}>
						<img src={item} alt='' />
					</div>
				))}
			</Slider>
		</>
	)
}
