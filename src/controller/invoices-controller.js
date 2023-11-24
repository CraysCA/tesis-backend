import {
	CreateInvoice,
	UpdateInvoice,
	FindInvoice,
	DestroyInvoice,
} from '../uses-cases/invoices/index.js'

import { CreateOrder } from '../uses-cases/order/index.js'

import { FindProduct, UpdateProduct } from '../uses-cases/products/index.js'

const createInvoice = async (request, response, next) => {
	const { body: data } = request
	try {
		const { products, orderId, userId, status, totalPrice } = data

		products.map(async product => {
			const { id } = product

			const productExist = await FindProduct({ id })
			if (productExist[0]?.dataValues) {
				const productAmount = productExist[0].dataValues.amount
				console.log(productExist[0].dataValues)
				const newAmount = productAmount - product.quantity
				if (newAmount >= 0) {
					await UpdateProduct({ id, data: { amount: newAmount } })
					await CreateOrder({
						data: { orderId, productId: id, amount: product.quantity },
					})
				}
			}
		})

		const invoice = await CreateInvoice({
			data: { orderId, userId, status, totalPrice },
		})

		if (invoice) {
			response
				.status(201)
				.json({ success: true, message: 'invoice created', invoice })
		} else {
			response
				.status(422)
				.json({ success: false, message: 'Unprocessable Entity' })
		}
	} catch (error) {
		next(error)
	}
}

const findInvoice = async (request, response, next) => {
	const { id, userId, orderId } = request.query
	try {
		const invoice = await FindInvoice({ id, userId, orderId })
		if (invoice)
			response
				.status(200)
				.json({ success: true, message: 'invoices listed', data: invoice })
	} catch (error) {
		next(error)
	}
}

const updateInvoice = async (request, response, next) => {
	const { body: data } = request
	const { orderId } = request.params
	try {
		const invoice = await UpdateInvoice({ orderId, data })

		if (invoice) {
			response
				.status(200)
				.json({ success: true, message: 'invoice updated', invoice })
		} else {
			response.status(404).json({ success: false, message: 'fail to update' })
		}
	} catch (error) {
		next(error)
	}
}
const deleteInvoice = async (request, response, next) => {
	const { id } = request.params
	try {
		const invoice = await DestroyInvoice({ id })

		if (invoice) {
			response.status(200).json({ success: true, message: 'invoice deleted' })
		} else {
			response.status(404).json({ success: false, message: 'fail to delete' })
		}
	} catch (error) {
		next(error)
	}
}

export default {
	createInvoice,
	findInvoice,
	updateInvoice,
	deleteInvoice,
}
