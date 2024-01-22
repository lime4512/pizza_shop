import { Carousel } from '../carousel'
import './style.scss'
import { FunctionComponent, useState } from 'react'

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
	const [numL, setNumL] = useState(0)
	const [numR, setNumR] = useState(0)

	return (
		<section className='content-container'>
			<div className='content-left'>
				<h2 className='content-title'>{data[numL].title}</h2>
				<p className='content-text'>{data[numL].desc}</p>
				<div className='content-slider'>
					<Carousel img={img} setNum={setNumL} />
				</div>

				<p className='prise'>{data[numL].price}</p>
			</div>

			<div className='content-left'>
				<h2 className='content-title'>{data[numR].title}</h2>
				<p className='content-text'>{data[numR].desc}</p>
				<div className='content-slider'>
					<Carousel img={img} setNum={setNumR} />
				</div>
				<p className='prise'>{data[numR].price}</p>
			</div>

			<div className='total-prise'>
				<h3>Price: {Number(data[numR].price) + Number(data[numL].price)}$</h3>
			</div>
		</section>
	)
}
