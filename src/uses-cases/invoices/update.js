import { invoiceRepository } from '../../models/repositories/index.js'

export default ({ orderId, data }) => {
	return invoiceRepository.update({ orderId, data })
}
