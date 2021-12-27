import sequelize from "../data-access";
import jwt from "jsonwebtoken";
const userModel = sequelize.models.user;

const login = async (login, password) => {
    const user =  await userModel.findOne({
        where: {
           login,
           password
        },
    });
    if (user) {
        const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: 30000 });
        return token;
    }

    return null;
};

export default {
    login,
};