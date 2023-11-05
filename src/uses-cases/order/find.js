import { orderRepository } from '../../models/repositories/index.js'

export default ({ id, orderId }) => {
	return orderRepository.find({ id, orderId })
}
