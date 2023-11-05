import { orderRepository } from '../../models/repositories/index.js'

export default ({ orderId, data }) => {
	return orderRepository.update({ orderId, data })
}
