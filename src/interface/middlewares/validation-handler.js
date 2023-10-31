import Joi from 'joi'
import pick from './pick.js'
import { logger } from '../utils/index.js'

const validateSchema = schema => (request, response, next) => {
	const validSchema = pick(schema, ['params', 'query', 'body'])
	const object = pick(request, Object.keys(validSchema))
	const { value, error } = Joi.compile(validSchema)
		.prefs({ errors: { label: 'key' } })
		.validate(object)

	if (error) {
		const errorMessage = error.details
			.map(details => details.message)
			.join(' ,')

		logger.error(errorMessage)
		response.status(403).json({ success: false, message: errorMessage })
	}
	Object.assign(request, value)
	next()
}

export default validateSchema
