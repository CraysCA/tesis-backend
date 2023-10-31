import { fileRepository } from '../../models/repositories/index.js'

export default ({ id, userId, date, isClient }) => {
	return fileRepository.find({ id, userId, date, isClient })
}
