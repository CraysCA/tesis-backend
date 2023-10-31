export default (sequelize, DataTypes) => {
	const product = sequelize.define(
		'product',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
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
				type: DataTypes.INTEGER,
			},
			img: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			underscored: true,
			timestamps: false,
			paranoid: true,
			hooks: {},
		},
	)
	// ! quitar luego
	product.sync({ alter: true })

	return product
}
