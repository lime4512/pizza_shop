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
				<div className='cart-total-title'>
					<h2>Cart</h2>
					<button onClick={() => setOpen(false)}>
						<img src='/close_FILL0_wght400_GRAD0_opsz24.svg' alt='' />
					</button>
				</div>

				{StoreCart.carts.length == 0 ? (
					<h3 className='cart-empty'>Carts empty</h3>
				) : (
					<div className='cart-content'>
						<div className='cart-list'>
							{StoreCart.carts.map(i => (
								<div className='cart-item' key={Math.random()}>
									<div className='cart-item-content'>
										<div className='cart-img'>
											<div className='cart-img-content'>
												<img src={i.img1} alt='' />
											</div>
											<div className='cart-img-content1'>
												<img src={i.img2} alt='' className='cart-img2' />
											</div>
										</div>

										<div className='cart-title'>
											<h3>{i.title1}</h3>
											<h3>{i.title2}</h3>
										</div>
									</div>
									<div className='cart-price-btn'>
										<h3 className='cart-price'>{i.price}$</h3>
										<button onClick={() => StoreCart.removeCart(i)}>del</button>
									</div>
								</div>
							))}
						</div>
						<div className='cart-total-price'>
							<h3>Price: {StoreCart.totalSum.toFixed(2)} $</h3>
							<div className='cart-btn-total'>
								<button
									onClick={() => StoreCart.allDelete}
									className='cart-delete'
								>
									all delete
								</button>
								<button
									className='cart-send'
									onClick={() => {
										alert('Order is processed')
										StoreCart.allDelete
										setOpen(false)
									}}
								>
									sending
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
})
