import { productRepository } from '../../models/repositories/index.js'

export default ({ id, data }) => {
	return productRepository.update({ id, data })
}
