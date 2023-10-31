import { logger } from '../utils/index.js'

export default (error, request, response, next) => {
	logger.error({
		level: 'error',
		message: error.message || error,
		stack: error.stack,
	})
	response.status(500).json({
		success: false,
		message: 'Something Went Wrong',
	})
}
