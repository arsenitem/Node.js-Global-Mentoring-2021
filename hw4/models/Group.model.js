import { DataTypes, Sequelize } from "sequelize";
export default (sequelize) => {
    sequelize.define('group', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUIDV4,
            defaultValue: Sequelize.literal('uuid_generate_v4()')
        },
        name: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        permissions: {
            allowNull: false,
            type: DataTypes.ARRAY(DataTypes.TEXT)
        },
    }, {
        tableName: 'groups',
        timestamps: false,
    })
}