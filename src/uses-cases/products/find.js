import { productRepository } from '../../models/repositories/index.js'

export default ({ id }) => {
	return productRepository.find({ id })
}
