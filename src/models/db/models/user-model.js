export default (sequelize, DataTypes) => {
	const user = sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
			},
			lastname: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			customerId: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			type: {
				type: DataTypes.INTEGER,
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
	//user.sync({ alter: true })

	return user
}
