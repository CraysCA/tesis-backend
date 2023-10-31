import { Login } from '../uses-cases/auth/index.js'

const login = async (request, response, next) => {
	const { user: userData } = request

	try {
		const token = await Login({ userData })
		if (token) {
			response.status(200).json({
				success: true,
				message: 'token created',
				data: token,
			})
		}
	} catch (error) {
		next(error)
	}
}

export default {
	login,
}
