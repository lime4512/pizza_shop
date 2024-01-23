import { observer } from 'mobx-react-lite'
import { Carousel } from '../carousel'
import './style.scss'
import { FunctionComponent, useState } from 'react'
import StoreCart from '../store/storeCart'

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

export const Content: FunctionComponent<Props> = observer(({ data }) => {
	const img = data.map(item => item.photo)
	const [numL, setNumL] = useState(0)
	const [numR, setNumR] = useState(0)

	const handelData = () => {
		StoreCart.addCart({ title: data[numL].title, price: Number(data[numL].price) })
	}
	return (
		<section className='content-container'>
			<div className='content-pizza'>
				<div className='content-left'>
					<div className='content-descL'>
						<h2 className='content-title'>{data[numL].title}</h2>
						<p className='content-text'>{data[numL].desc}</p>
					</div>
					<div className='content-sliderL'>
						<Carousel img={img} setNum={setNumL} rot='' />
					</div>

					<p className='priseL'>Prise: {data[numL].price}$</p>
				</div>

				<div className='content-right'>
					<div className='content-desc'>
						<h2 className='content-title'>{data[numR].title}</h2>
						<p className='content-text'>{data[numR].desc}</p>
					</div>
					<div className='content-sliderR'>
						<Carousel img={img} setNum={setNumR} rot='R' />
					</div>
					<p className='prise'>Prise: {data[numR].price}$</p>
				</div>
			</div>

			<div className='total-prise'>
				<h3>
					Total Price: {Number(data[numR].price) + Number(data[numL].price)}$
				</h3>
				<button className='add-cart' onClick={handelData}>
					Add cart
				</button>
			</div>
		</section>
	)
})
