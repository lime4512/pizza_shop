import { FunctionComponent } from 'react'
import './style.scss'
import { observer } from 'mobx-react-lite'
import StoreCart from '../store/storeCart'

interface Props {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal: FunctionComponent<Props> = observer(({ open, setOpen }) => {
	return (
		<div className={!open ? 'modal-cart' : 'modal-cart open'}>
			<div className='cart'>
				<div className='cart-title'>
					<h2>Cart</h2>
					<button onClick={() => setOpen(false)}>
						<img src='/close_FILL0_wght400_GRAD0_opsz24.svg' alt='' />
					</button>
				</div>
				<div className='cart-list'>
					{StoreCart.carts.map(i => (
						<div key={Math.random()}>
							<h1>{i.title}</h1>
							<p>{i.price}</p>
							<button onClick={() => StoreCart.removeCart(i)}>Del</button>
						</div>
					))}
				</div>

				<div className='cart-total-price'>
					<h3>{StoreCart.totalSum}</h3>
				</div>
			</div>
		</div>
	)
})
