import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import { FunctionComponent } from 'react'

interface dataItem {
	title: string
	desc: string
	price: string
	photo: string
	diameter: string
}

interface Props {
	data: dataItem[]
}

export const Content: FunctionComponent<Props> = ({ data }) => {
	const img = data.map(item => item.photo)
	console.log(img)
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		swipeToSlide: true,
	}
	return (
		<section className='content-container'>
			<div className='content-left'>
				<h2 className='content-title'></h2>
				<p className='content-text'></p>
				<div className='content-slider'>
					<Slider {...settings}>
						{img.map(item => (
							<div className='img-pizza'>
								<img src={item} alt='' />
							</div>
						))}
					</Slider>
				</div>
			</div>

			<div className='content-left'>
				<h2 className='content-title'></h2>
				<p className='content-text'></p>
				<div className='content-slider'>
					<Slider {...settings}>
						{img.map(item => (
							<div className='img-pizza'>
								<img src={item} alt='' />
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	)
}
