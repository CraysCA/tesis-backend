import dotenv from 'dotenv'
dotenv.config()

export const config = {
	serverSettings: {
		env: process.env.NODE_ENV || 'dev',
		port: process.env.PORT || 3000,
		host: process.env.HOST || `http://localhost:${process.env.PORT}`,
	},
	db: {
		host: process.env.DB_HOST || 'localhost',
		database: process.env.DB_NAME || 'test',
		username: process.env.DB_USERNAME || 'root',
		password: process.env.DB_PASSWORD || '',
		dialect: process.env.DB_DIALECT || 'mysql',
		logging: process.env.DB_LOGGING === 'true',
		port: process.env.DB_PORT || 3306,
	},
	jwt: {
		secret: process.env.JWT_SECRET_KEY,
		isActive: process.env.JWT_IS_ACTIVE === 'true',
	},
	aws: {
		bucketName: process.env.AWS_BUCKET_NAME,
		region: process.env.AWS_BUCKET_REGION,
		publicKey: process.env.AWS_PUBLIC_KEY,
		secretKey: process.env.AWS_SECRET_KEY,
	},
}
