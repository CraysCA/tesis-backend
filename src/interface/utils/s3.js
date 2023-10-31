import { S3Client } from '@aws-sdk/client-s3'
import { config } from '../../config/config.js'

const { region, publicKey, secretKey } = config.aws

const s3 = new S3Client({
	region: region,
	credentials: {
		accessKeyId: publicKey,
		secretAccessKey: secretKey,
	},
})

export { s3 }
