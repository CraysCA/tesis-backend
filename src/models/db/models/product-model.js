export default (sequelize, DataTypes) => {
	const product = sequelize.define(
		'product',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
			},
			description: {
				type: DataTypes.STRING,
			},
			amount: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			price: {
				type: DataTypes.DOUBLE,
			},
			img: {
				type: DataTypes.STRING,
				allowNull: false,
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
	//product.sync({ alter: true })

	product.associate = models => {
		// product.hasMany(models.order, {
		// 	foreignKey: 'productId',
		// })
		product.belongsTo(models.order, {
			foreignKey: 'id',
			sourceKey: 'productId',
			as: 'product',
		})
	}

	return product
}
