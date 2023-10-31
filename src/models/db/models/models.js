import connection from '../connection.js'
import { DataTypes } from 'sequelize'

import { userModel, fileModel, productModel, invoiceModel } from './index.js'

const models = {
	user: userModel(connection, DataTypes),
	file: fileModel(connection, DataTypes),
	productModel: productModel(connection, DataTypes),
	invoiceModel: invoiceModel(connection, DataTypes),
}

Object.keys(models).forEach(modelName => {
	if (models[modelName].associate) {
		models[modelName].associate(models)
	}
})

export default models
