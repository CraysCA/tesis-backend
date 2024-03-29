import {
	CreateProduct,
	FindProduct,
	UpdateProduct,
	DestroyProduct,
} from '../uses-cases/products/index.js'

const createProduct = async (request, response, next) => {
	const { body: data } = request
	try {
		const product = await CreateProduct({ data })

		if (product) {
			response
				.status(201)
				.json({ success: true, message: 'product created', product })
		} else {
			response
				.status(422)
				.json({ success: false, message: 'Unprocessable Entity' })
		}
	} catch (error) {
		next(error)
	}
}

const findProduct = async (request, response, next) => {
	const { id } = request.params
	try {
		const product = await FindProduct({ id })
		if (product)
			response
				.status(200)
				.json({ success: true, message: 'products listed', data: product })
	} catch (error) {
		next(error)
	}
}

const updateProduct = async (request, response, next) => {
	const { body: data } = request
	const { id } = request.params
	try {
		const product = await UpdateProduct({ id, data })

		if (product) {
			response
				.status(200)
				.json({ success: true, message: 'product updated', product })
		} else {
			response.status(404).json({ success: false, message: 'fail to update' })
		}
	} catch (error) {
		next(error)
	}
}
const deleteProduct = async (request, response, next) => {
	const { id } = request.params
	try {
		const product = await DestroyProduct({ id })

		if (product) {
			response.status(200).json({ success: true, message: 'product deleted' })
		} else {
			response.status(404).json({ success: false, message: 'fail to delete' })
		}
	} catch (error) {
		next(error)
	}
}

export default {
	createProduct,
	findProduct,
	updateProduct,
	deleteProduct,
}
