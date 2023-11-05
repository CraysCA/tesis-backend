import { orderRepository } from '../../models/repositories/index.js'

export default ({ data }) => {
	return orderRepository.create({ data })
}
