import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);

const modelDefiners = [
	require ("../models/User.model")
];

for (const modelDefiner of modelDefiners) {
	modelDefiner.default(sequelize);
}

export default sequelize;
