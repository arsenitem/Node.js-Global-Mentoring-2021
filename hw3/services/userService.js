import sequelize from "../data-access";
const { Op } = require("sequelize");

const userModel = sequelize.models.user;

const findById = async (id) => {
    let user = await userModel.findByPk(id);
    if (user) {
        return user;
    }

    return null;
};

const findAll = async (login, limit) => {
    return await userModel.findAll({
        where: {
          login: {
            [Op.like]: `%${login}%`
          }
        },
        limit: limit,
        order: ["login"]
    });
};

const deleteById = async (id) => {
    let deleted = await userModel.update({ isdeleted: true }, {
        where: {
          id
        },
        returning: true
    });

    if (deleted[1]) {
        return deleted[1][0];
    }

    return null;
};

const addUser = async (login, password, age) => {
    return await userModel.create({login, password, age});
};

const updateUser = async (id, login, password, age) => {
    let updated =  await userModel.update({ login, password, age }, {
        where: {
          id
        },
        returning: true
    });

    if (updated[1]) {
        return updated[1][0];
    }

    return null;
};

export default {
    findById,
    findAll,
    deleteById,
    addUser,
    updateUser
};