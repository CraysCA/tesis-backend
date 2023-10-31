import { userRepository } from '../../models/repositories/index.js'
import bcrypt from 'bcryptjs'

export default ({ data }) => {
	const { password } = data
	const salt = bcrypt.genSaltSync(10)
	const hashedPassword = bcrypt.hashSync(password, salt)
	data.password = hashedPassword

	return userRepository.create({ data })
}
