import Joi from 'joi'

const create = {
	body: Joi.object().keys({
		name: Joi.string().trim().required(),
		lastname: Joi.string().trim().required(),
		email: Joi.string().lowercase().email().trim().required(),
		password: Joi.string().trim().required(),
		customerId: Joi.number().integer().optional(),
		type: Joi.number().integer().valid(1, 2, 3).required(),
	}),
}

const update = {
	params: Joi.object().keys({
		id: Joi.number().required(),
	}),
	body: Joi.object().keys({
		name: Joi.string().trim().optional(),
		lastname: Joi.string().trim().optional(),
		email: Joi.string().lowercase().email().trim().optional(),
		password: Joi.string().trim().optional(),
		customerId: Joi.number().integer().optional(),
		type: Joi.number().integer().valid(1, 2, 3).optional(),
	}),
}

const destroy = {
	params: Joi.object().keys({
		id: Joi.number().required(),
	}),
}

const getParams = {
	params: Joi.object().keys({
		id: Joi.number().optional(),
	}),
}

export default { create, update, destroy, getParams }
