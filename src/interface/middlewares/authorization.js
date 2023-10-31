import jwt from 'jsonwebtoken'
import { config } from '../../config/config.js'

const { secret, isActive } = config.jwt

export default async (request, response, next) => {
	if (!isActive) return next()

	const { auth_token: authToken } = request.headers
	try {
		if (!authToken)
			return response
				.status(401)
				.json({ success: false, message: "authToken don't exist" })

		const payload = jwt.verify(authToken, secret)

		if (!payload)
			return response
				.status(401)
				.json({ success: false, message: 'authToken invalid' })
		next()
	} catch (error) {
		next(error)
	}
}
