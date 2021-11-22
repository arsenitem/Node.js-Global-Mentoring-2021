import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DB_CONNECTION_URL, {
	pool: {
	  max: 10,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
	}
});
const modelDefiners = [
	require ("../models/User.model"),
	require ("../models/Group.model"),
	require ("../models/UserGroup.model")
];

for (const modelDefiner of modelDefiners) {
	modelDefiner.default(sequelize);
}

sequelize.models.group.belongsToMany(sequelize.models.user, { through: 'User_Group' });
sequelize.models.user.belongsToMany(sequelize.models.group, { through: 'User_Group' });
export default sequelize;
