import { invoiceRepository } from '../../models/repositories/index.js'

export default ({ id }) => {
	return invoiceRepository.destroy({ id })
}
