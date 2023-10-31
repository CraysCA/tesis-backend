import Express from 'express'
import fileUpload from 'express-fileupload'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

import routes from './interface/routes/index.js'
import logger from './interface/utils/logger.js'

import './models/db/connection.js'
import './interface/middlewares/auth/index.js'

import {
	errorHandler,
	notFoundHandler,
	cors,
} from './interface/middlewares/index.js'

import { config } from './config/config.js'
const { port } = config.serverSettings

const app = Express()
app.disable('x-powered-by')

app.use(helmet())

app.use(cors)

app.use(Express.json())
app.use(cookieParser())

app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: `${process.cwd()}/src/tmp/`,
	}),
)
//comment

app.use(routes)

app.use(notFoundHandler)

app.use(errorHandler)

app.listen(port, () => logger.info(`Server is running on port ${port}`))
