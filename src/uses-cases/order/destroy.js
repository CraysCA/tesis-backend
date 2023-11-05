import { orderRepository } from '../../models/repositories/index.js'

export default ({ id }) => {
	return orderRepository.destroy({ id })
}
