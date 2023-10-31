import { Sequelize } from 'sequelize'
import { config } from '../../config/config.js'
import logger from '../../interface/utils/logger.js'

const { host, port, username, password, dialect, logging, database } = config.db

const connection = new Sequelize(database, username, password, {
	host,
	dialect,
	port,
	logging,
})

connection
	.authenticate()
	.then(() => {
		logger.info('Connection has been established successfully.')
	})
	.catch(err => {
		logger.error('Connection to database failed:', err)
	})

export default connection
