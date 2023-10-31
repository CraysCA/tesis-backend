import { userRepository } from '../../models/repositories/index.js'

export default ({ id, email }) => {
	return userRepository.find({ id, email })
}
