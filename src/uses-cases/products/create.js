import { productRepository } from '../../models/repositories/index.js'

export default ({ data }) => {
	return productRepository.create({ data })
}
