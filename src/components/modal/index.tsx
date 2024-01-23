import { FunctionComponent } from 'react'
import './style.scss'
interface Props {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal: FunctionComponent<Props> = ({ open, setOpen }) => {
	return (
		<div className={!open ? 'modal-cart' : 'modal-cart open'}>
			<div className='cart'>
				<div className='cart-title'>
					<h2>Cart</h2>
					<button onClick={() => setOpen(false)}>
						<img src='/close_FILL0_wght400_GRAD0_opsz24.svg' alt='' />
					</button>
				</div>
				<h1>pizza</h1>
			</div>
		</div>
	)
}
