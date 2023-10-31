import { userRepository } from '../../models/repositories/index.js'

export default ({ id, data }) => {
	return userRepository.update({ id, data })
}
