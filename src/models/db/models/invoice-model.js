export default (sequelize, DataTypes) => {
	const invoice = sequelize.define(
		'invoice',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			orderId: {
				type: DataTypes.UUID,
				//	allowNull: false,
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			status: {
				type: DataTypes.STRING,
			},
			totalPrice: {
				type: DataTypes.DOUBLE,
			},
		},
		{
			freezeTableName: true,
			underscored: true,
			timestamps: true,
			paranoid: true,
			index: true,
			hooks: {},
		},
	)
	// ! quitar luego
	invoice.sync({ alter: true })

	invoice.associate = models => {
		invoice.hasMany(models.order, {
			foreignKey: 'orderId',
			sourceKey: 'orderId',
			as: 'order',
		})
	}

	return invoice
}
