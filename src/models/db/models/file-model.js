import { config } from '../../../config/config.js'
const { host } = config.serverSettings

export default (sequelize, DataTypes) => {
	const file = sequelize.define(
		'file',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			filename: {
				type: DataTypes.STRING,
			},
			path: {
				type: DataTypes.STRING,
			},
			size: {
				type: DataTypes.DOUBLE,
				allowNull: false,
			},
			userId: {
				type: DataTypes.INTEGER,
			},
			isClient: {
				type: DataTypes.BOOLEAN,
			},
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
			updatedAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
			deletedAt: {
				type: DataTypes.DATE,
			},
			downloadUrl: {
				type: DataTypes.VIRTUAL,
				get() {
					return this.id && this.path ? `${host}/files/${this.id}/download` : ''
				},
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
	file.sync({ alter: true })

	return file
}
