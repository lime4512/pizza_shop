import { makeAutoObservable } from 'mobx'

type Product = {
	title1: string
	title2: string
	img1: string
	img2: string
	price: number
}

class StoreCart {
	carts: Product[] = []
	constructor() {
		makeAutoObservable(this)
	}

	addCart(item: {
		title1: string
		title2: string
		img1: string
		img2: string
		price: number
	}) {
		this.carts.push(item)
	}

	removeCart(item: {
		title1: string
		title2: string
		img1: string
		img2: string
		price: number
	}) {
		const index = this.carts.indexOf(item)
		if (index !== -1) {
			this.carts.splice(index, 1)
		}
	}

	get totalSum(): number {
		return this.carts.reduce((sum, carts) => sum + carts.price, 0)
	}

	get allDelete(): Array<Product> {
		return this.carts.splice(0, this.carts.length)
	}
}

export default new StoreCart()
