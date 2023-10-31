export default (sequelize, DataTypes) => {
	const invoice = sequelize.define(
		'invoice',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			productId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			amount: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			status: {
				type: DataTypes.STRING,
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
	invoice.sync({ alter: true })

	return invoice
}