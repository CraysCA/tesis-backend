import { Op } from 'sequelize'
import models from '../db/models/models.js'

const { product: productService, order: orderService } = models

const create = async ({ data }) => {
	try {
		return await orderService.create(data)
	} catch (error) {
		throw new Error(error)
	}
}

const find = async ({ id }) => {
	const conditions = { id: { [Op.not]: null } }
	if (id) conditions.id = id

	try {
		return await orderService.findAll({
			where: conditions,
			attributes: {
				exclude: ['productId', 'deletedAt'],
			},
			include: [
				{
					model: productService,
					attributes: {
						exclude: ['createdAt', 'updatedAt', 'deletedAt'],
					},
					as: 'product',
				},
			],
		})
	} catch (error) {
		throw new Error(error)
	}
}

const update = async ({ orderId, data }) => {
	try {
		const invoice = await orderService.update(data, { where: { orderId } })
		if (invoice[0]) return orderService.findOne({ where: { orderId } })
	} catch (error) {
		throw new Error(error)
	}
}

const destroy = async ({ orderId }) => {
	try {
		return await orderService.destroy({ where: { orderId } })
	} catch (error) {
		throw new Error(error)
	}
}

export default {
	create,
	find,
	update,
	destroy,
}
