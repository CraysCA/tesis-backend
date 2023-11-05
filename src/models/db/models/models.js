import connection from '../connection.js'
import { DataTypes } from 'sequelize'

import {
	userModel,
	fileModel,
	productModel,
	invoiceModel,
	orderModel,
} from './index.js'

const models = {
	user: userModel(connection, DataTypes),
	file: fileModel(connection, DataTypes),
	product: productModel(connection, DataTypes),
	invoice: invoiceModel(connection, DataTypes),
	order: orderModel(connection, DataTypes),
}

Object.keys(models).forEach(modelName => {
	if (models[modelName].associate) {
		models[modelName].associate(models)
	}
})

export default models
