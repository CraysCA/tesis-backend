import { fileRepository } from '../../models/repositories/index.js'

export default () => {
	return fileRepository.getLastFiles()
}
