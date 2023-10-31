import { Op } from 'sequelize'
import models from '../db/models/models.js'
import dayjs from 'dayjs'

const { file: fileService } = models

const create = async ({ data }) => {
	try {
		return await fileService.create(data)
	} catch (error) {
		throw new Error(error)
	}
}

const find = async ({ id, userId, date, isClient }) => {
	const conditions = { id: { [Op.not]: null } }

	if (id) conditions.id = id
	if (userId) conditions.userId = userId
	if (isClient) conditions.isClient = isClient

	try {
		return await fileService.findAll({
			where: conditions,
		})
	} catch (error) {
		throw new Error(error)
	}
}

const update = async ({ id, data }) => {
	try {
		const user = await fileService.update(data, { where: { id } })
		if (user[0]) return fileService.findOne({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}

const destroy = async ({ id }) => {
	try {
		return await fileService.destroy({ where: { id } })
	} catch (error) {
		throw new Error(error)
	}
}

const getFile = async ({ id }) => {
	try {
		return await fileService.findOne({
			where: { id },
		})
	} catch (error) {
		throw new Error(error)
	}
}

const getLastFiles = async () => {
	const startDay = dayjs().startOf('date').format()
	const endDay = dayjs().endOf('date').format()

	try {
		return await fileService.findAll({
			where: {
				isClient: false,
				createdAt: { [Op.between]: [startDay, endDay] },
			},
			limit: 3,
			order: [['id', 'DESC']],
		})
	} catch (error) {
		throw new Error(error)
	}
}

export default { create, find, update, destroy, getFile, getLastFiles }
