import { Op } from 'sequelize'
import models from '../db/models/models.js'

const { user: userService } = models

const create = async ({ data }) => {
	try {
		return await userService.create(data)
	} catch (error) {
		throw new Error(error)
	}
}

const find = async ({ id, email }) => {
	const conditions = { id: { [Op.not]: null } }

	if (id) conditions.id = id
	if (email) conditions.email = email

	try {
		return await userService.findAll({
			where: conditions,
			attributes: { exclude: ['password'] },
		})
	} catch (error) {
		throw new Error(error)
	}
}

const getUsersForFormatter = async () => {
	try {
		return await userService.findAll({
			attributes: { include: ['id', 'name', 'lastname', 'email'] },
		})
	} catch (error) {
		throw new Error(error)
	}
}

const getUserByEmail = async ({ email }) => {
	try {
		return await userService.findOne({ where: { email } })
	} catch (error) {
		throw new Error(error)
	}
}

const update = async ({ id, data }) => {
	try {
		const user = await userService.update(data, { where: { id } })
		if (user[0]) return userService.findOne({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}

const destroy = async ({ id }) => {
	try {
		return await userService.destroy({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}

export default {
	create,
	find,
	update,
	destroy,
	getUserByEmail,
	getUsersForFormatter,
}
