import { Op } from 'sequelize'
import models from '../db/models/models.js'

const { product: productService } = models

const create = async ({ data }) => {
	try {
		return await productService.create(data)
	} catch (error) {
		throw new Error(error)
	}
}

const find = async ({ id }) => {
	const conditions = { id: { [Op.not]: null } }
	if (id) conditions.id = id

	try {
		return await productService.findAll({ where: conditions })
	} catch (error) {
		throw new Error(error)
	}
}

const update = async ({ id, data }) => {
	try {
		const product = await productService.update(data, { where: { id } })
		if (product[0]) return productService.findOne({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}

const destroy = async ({ id }) => {
	try {
		return await productService.destroy({ where: { id } })
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
