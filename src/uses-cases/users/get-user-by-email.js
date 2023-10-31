import { userRepository } from '../../models/repositories/index.js'

export default ({ email }) => {
	return userRepository.getUserByEmail({ email })
}
