import { fileRepository } from '../../models/repositories/index.js'

export default ({ data }) => {
	return fileRepository.create({ data })
}
