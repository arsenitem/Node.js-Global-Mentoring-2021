import { DataTypes } from "sequelize";
import { v4 as uuidv4 } from "uuid";
export default (sequelize) => {
    sequelize.define('user', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUIDV4,
            defaultValue: uuidv4()
        },
        login: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        password: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        age: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        isdeleted: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
    }, {
        tableName: 'users',
        timestamps: false,
    })
}