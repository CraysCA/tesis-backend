import { Op } from 'sequelize'
import models from '../db/models/models.js'

const { invoice: invoiceService, product: productService } = models

const create = async ({ data }) => {
	try {
		return await invoiceService.create(data)
	} catch (error) {
		throw new Error(error)
	}
}

const find = async ({ id }) => {
	const conditions = { id: { [Op.not]: null } }
	if (id) conditions.id = id

	try {
		return await invoiceService.findAll({
			where: conditions,
			attributes: { exclude: ['productId'] },
			include: [{ model: productService, as: 'product' }],
		})
	} catch (error) {
		throw new Error(error)
	}
}

const update = async ({ id, data }) => {
	try {
		const invoice = await invoiceService.update(data, { where: { id } })
		if (invoice[0]) return invoiceService.findOne({ where: { id } })
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
