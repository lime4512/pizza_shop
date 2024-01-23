import { makeAutoObservable } from 'mobx'

type Product = {
	title: string
	price: number
}

class StoreCart {
	carts: Product[] = []
	constructor() {
		makeAutoObservable(this)
	}

	addCart(item: { title: string; price: number }) {
		this.carts.push(item)
	}

	removeCart(item: { title: string; price: number }) {
		const index = this.carts.indexOf(item)
		if (index !== -1) {
			this.carts.splice(index, 1)
		}
	}

	get totalSum(): number {
		return this.carts.reduce((sum, carts) => sum + carts.price, 0)
	}
}

export default new StoreCart()
