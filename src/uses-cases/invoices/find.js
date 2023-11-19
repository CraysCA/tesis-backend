import { invoiceRepository } from '../../models/repositories/index.js'

export default ({ id, userId, orderId }) => {
	return invoiceRepository.find({ id, userId, orderId })
}
