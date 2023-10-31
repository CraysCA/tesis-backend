import jwt from 'jsonwebtoken'
import { config } from '../../config/config.js'
const { secret } = config.jwt

export default async ({ userData }) => {
	const payload = {
		id: userData.id,
		name: userData.name,
		lastname: userData.lastname,
		email: userData.email,
		type: userData.type,
		customerId: userData.customerId || null,
	}

	const token = jwt.sign(payload, secret, { expiresIn: '1d' })

	return token
}
