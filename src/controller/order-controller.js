import { Create, Find, Update, Destroy } from '../uses-cases/order/index.js'

const createOrder = async (request, response, next) => {
	const { body: data } = request
	try {
		const order = await Create({ data })

		if (order) {
			response
				.status(201)
				.json({ success: true, message: 'order created', order })
		} else {
			response
				.status(422)
				.json({ success: false, message: 'Unprocessable Entity' })
		}
	} catch (error) {
		next(error)
	}
}

const findOrder = async (request, response, next) => {
	const { id, orderId } = request.params
	try {
		const order = await Find({ id, orderId })
		if (order)
			response
				.status(200)
				.json({ success: true, message: 'orders listed', data: order })
	} catch (error) {
		next(error)
	}
}

const updateOrder = async (request, response, next) => {
	const { body: data } = request
	const { id } = request.params
	try {
		const order = await Update({ id, data })

		if (order) {
			response
				.status(200)
				.json({ success: true, message: 'order updated', order })
		} else {
			response.status(404).json({ success: false, message: 'fail to update' })
		}
	} catch (error) {
		next(error)
	}
}
const deleteOrder = async (request, response, next) => {
	const { id } = request.params
	try {
		const order = await Destroy({ id })

		if (order) {
			response.status(200).json({ success: true, message: 'order deleted' })
		} else {
			response.status(404).json({ success: false, message: 'fail to delete' })
		}
	} catch (error) {
		next(error)
	}
}

export default {
	createOrder,
	findOrder,
	updateOrder,
	deleteOrder,
}
