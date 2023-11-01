import { Create, Find, Update, Destroy } from '../uses-cases/invoices/index.js'

const createInvoice = async (request, response, next) => {
	const { body: data } = request
	try {
		const invoice = await Create({ data })

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
	const { id } = request.params
	try {
		const invoice = await Find({ id })
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
	const { id } = request.params
	try {
		const invoice = await Update({ id, data })

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
		const invoice = await Destroy({ id })

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
