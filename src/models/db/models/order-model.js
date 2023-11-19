export default (sequelize, DataTypes) => {
	const order = sequelize.define(
		'order',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			orderId: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: false,
			},
			productId: {
				type: DataTypes.UUID,
			},
			amount: {
				type: DataTypes.INTEGER,
			},
		},
		{
			freezeTableName: true,
			underscored: true,
			timestamps: true,
			paranoid: true,
			hooks: {},
		},
	)
	// ! quitar luego
	order.sync({ alter: true })

	order.associate = models => {
		// order.belongsTo(models.invoice, {
		// 	sourceKey: 'orderId',
		// 	as: 'order',
		// })
		order.hasOne(models.product, {
			foreignKey: 'id',
			sourceKey: 'productId',
			as: 'product',
		})
	}

	return order
}
