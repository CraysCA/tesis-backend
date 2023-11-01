import { invoiceRepository } from '../../models/repositories/index.js'

export default ({ id, data }) => {
	return invoiceRepository.create({ id, data })
}
