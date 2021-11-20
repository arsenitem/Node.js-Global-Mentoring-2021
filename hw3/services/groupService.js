import sequelize from "../data-access";

const groupModel = sequelize.models.group;
const userGroupModel = sequelize.models.user_group;
const findById = async (id) => {
    let group = await groupModel.findByPk(id);
    if (group) {
        return group;
    }

    return null;
};

const findAll = async () => {
    return await groupModel.findAll();
};

const deleteById = async (id) => {
    let deleted = await groupModel.destroy( {
        where: {
          id
        },
    });

    if (deleted[1]) {
        return deleted[1];
    }

    return null;
};

const addGroup = async (name, permissions) => {
    return await groupModel.create({name, permissions});
};

const updateGroup = async (id, name, permissions) => {
    let updated =  await groupModel.update({ name, permissions }, {
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

const addUsersToGroup = async(groupId, userIds) => {
    let transaction;    

    try {
        let records = userIds.map(userId => {
            return {group_id: groupId, user_id: userId}
        })
        transaction = await sequelize.transaction();
        let rr = await userGroupModel.bulkCreate(records)
        console.log(rr)
        await transaction.commit();

    } catch (err) {
        console.log(err)
        if (transaction) await transaction.rollback();
        console.log("aborted transaction")
    }
}

export default {
    findById,
    findAll,
    deleteById,
    addGroup,
    updateGroup,
    addUsersToGroup
};