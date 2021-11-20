import { DataTypes } from "sequelize";
import { v4 as uuidv4 } from "uuid";
export default (sequelize) => {
    sequelize.define('group', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUIDV4,
            defaultValue: uuidv4()
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