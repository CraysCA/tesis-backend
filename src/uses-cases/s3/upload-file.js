import { s3 } from '../../interface/utils/index.js'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import fs from 'node:fs'

import { config } from '../../config/config.js'
const { bucketName } = config.aws

export default async (directory, filePath) => {
	try {
		const stream = fs.createReadStream(filePath)

		const params = {
			Bucket: bucketName,
			Key: directory,
			Body: stream,
		}

		const command = new PutObjectCommand(params)
		const isUploaded = await s3.send(command)
		fs.unlinkSync(filePath)
		if (isUploaded) return true

		return false
	} catch (error) {
		throw new Error(error)
	}
}
