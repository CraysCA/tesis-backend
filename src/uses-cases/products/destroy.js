import { productRepository } from '../../models/repositories/index.js'

export default ({ id }) => {
	return productRepository.destroy({ id })
}
