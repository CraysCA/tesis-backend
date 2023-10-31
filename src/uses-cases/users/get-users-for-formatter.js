import { userRepository } from '../../models/repositories/index.js'

export default () => {
	return userRepository.getUsersForFormatter()
}
