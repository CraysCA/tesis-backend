import { GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { s3 } from '../../interface/utils/index.js'
import { config } from '../../config/config.js'
const { bucketName } = config.aws

export default async path => {
	const command = new GetObjectCommand({ Bucket: bucketName, Key: path })
	const url = (await getSignedUrl(s3, command, { expiresIn: 7200 })) || ''

	return url
}
