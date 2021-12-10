import { DataTypes, Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
export default (sequelize) => {
    sequelize.define('user_group', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUIDV4,
            defaultValue: Sequelize.literal('uuid_generate_v4()')
        },
        user_id: {
            allowNull: false,
            type: DataTypes.UUIDV4,
            references: {
                model: 'user',
                key: 'id'
            },
            onDelete: 'cascade',
        },
        group_id: {
            allowNull: false,
            type: DataTypes.UUIDV4,
            references: {
                model: 'group',
                key: 'id'
            },
            onDelete: 'cascade',
        },
    }, {
        tableName: 'user_group',
        timestamps: false,
    })
}