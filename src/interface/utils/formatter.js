const getName = (userId, users) => {
	const user = users.find(user => user.id === userId)
	return user ? user.name : 'usuario desconocido'
}

const getLastname = (userId, users) => {
	const user = users.find(user => user.id === userId)
	return user ? user.lastname : ''
}

const getEmail = (userId, users) => {
	const user = users.find(user => user.id === userId)
	return user ? user.email : 'email desconocido'
}

export function formatUsersInFiles(files, users) {
	return files.map(file => {
		file.dataValues.uploadedBy = {
			id: file.dataValues.userId,
			name: getName(file.dataValues.userId, users),
			lastname: getLastname(file.dataValues.userId, users),
			email: getEmail(file.dataValues.userId, users),
		}
		delete file.dataValues.userId
		return file
	})
}

export default { formatUsersInFiles }
