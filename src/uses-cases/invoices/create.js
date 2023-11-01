import { invoiceRepository } from '../../models/repositories/index.js'

export default ({ data }) => {
	return invoiceRepository.create({ data })
}
