import {
	CreateFile,
	FindFiles,
	GetFile,
	GetLastFiles,
} from '../uses-cases/files/index.js'
import { GetUsersForFormatter } from '../uses-cases/users/index.js'
import { formatter } from '../interface/utils/index.js'

import path from 'node:path'

import { UploadFile, GetLinkFile } from '../uses-cases/s3/index.js'

const uploadFile = async (request, response, next) => {
	const userId = Number(request.headers['x-user-id'])
	const { body } = request

	let { files } = request.files

	if (typeof files === 'object' && !files[1]) files = [files]

	try {
		const filesData = await Promise.all(
			files.map(async file => {
				const { name, tempFilePath, size } = file
				const parsedFilename = name.replace(/\s+/g, '_').toLowerCase()
				const directory = path.join(body.folder, parsedFilename)

				const isUploaded = await UploadFile(directory, tempFilePath)
				if (isUploaded) {
					const data = {
						filename: name,
						size: size,
						path: directory,
						userId: userId,
						isClient: body.isClient,
					}
					const fileData = await CreateFile({ data })

					return fileData
				} else {
					response.status(400).json({
						success: false,
						message: 'fail to upload file',
					})
				}
			}),
		)

		if (filesData.length > 0) {
			const users = await GetUsersForFormatter()
			const formattedFiles = formatter.formatUsersInFiles(filesData, users)

			response.status(201).json({
				success: true,
				message: 'file uploaded && created',
				data: formattedFiles,
			})
		} else {
			response.status(400).json({
				success: true,
				message: 'file uploaded but not created',
			})
		}
	} catch (error) {
		next(error)
	}
}

const findFiles = async (request, response, next) => {
	const { id, userId, date, isClient } = request.query
	try {
		const files = await FindFiles({ id, userId, date, isClient })

		if (files.length > 0) {
			const users = await GetUsersForFormatter()

			const formattedFiles = formatter.formatUsersInFiles(files, users)

			response
				.status(200)
				.json({ success: true, message: 'files listed', data: formattedFiles })
		} else {
			response.status(200).json({ success: true, message: 'empty list' })
		}
	} catch (error) {
		next(error)
	}
}

const getLastFiles = async (request, response, next) => {
	try {
		const files = await GetLastFiles()

		if (files.length > 0) {
			// const users = await GetUsersForFormatter()

			// const formattedFiles = formatter.formatUsersInFiles(files, users)

			response
				.status(200)
				.json({ success: true, message: 'files listed', data: files })
		} else {
			response.status(200).json({ success: true, message: 'empty list' })
		}
	} catch (error) {
		next(error)
	}
}

const downloadFile = async (request, response, next) => {
	const { id } = request.params
	try {
		const file = await GetFile({ id })

		if (file) {
			const { path } = file.dataValues
			const link = await GetLinkFile(path)

			response.redirect(link)
		} else {
			response.status(404).json({ success: false, message: 'file not found' })
		}
	} catch (error) {
		next(error)
	}
}

export default {
	uploadFile,
	findFiles,
	downloadFile,
	getLastFiles,
}
