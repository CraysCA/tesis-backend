import { Op } from 'sequelize'
import models from '../db/models/models.js'

const {
	invoice: invoiceService,
	product: productService,
	order: orderService,
} = models

const create = async ({ data }) => {
	try {
		return await invoiceService.create(data)
	} catch (error) {
		throw new Error(error)
	}
}

const find = async ({ id, userId, orderId }) => {
	const conditions = { id: { [Op.not]: null } }
	if (id) conditions.id = id
	if (userId) conditions.userId = userId
	if (orderId) conditions.orderId = orderId

	try {
		return await invoiceService.findAll({
			where: conditions,
			attributes: { exclude: ['deletedAt'] },
			include: [
				{
					model: orderService,
					attributes: {
						exclude: [
							'id',
							'orderId',
							'productId',
							'createdAt',
							'updatedAt',
							'deletedAt',
						],
					},
					as: 'order',
					include: {
						model: productService,
						attributes: {
							exclude: ['createdAt', 'updatedAt', 'deletedAt'],
						},
						as: 'product',
					},
				},
			],
		})
	} catch (error) {
		throw new Error(error)
	}
}

const update = async ({ orderId, data }) => {
	try {
		const invoice = await invoiceService.update(data, { where: { orderId } })
		if (invoice[0]) return invoiceService.findOne({ where: { orderId } })
	} catch (error) {
		throw new Error(error)
	}
}

const destroy = async ({ id }) => {
	try {
		return await invoiceService.destroy({ where: { id } })
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
