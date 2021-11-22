export const createUserResponse = function(user, response) {
    if (user) {
        response.json(user);
    } else {
        response.status(400).json({status: "failed", error: "User not found"});
    }
}

export const creategroupResponse = function(group, response) {
    if (group) {
        response.json(group);
    } else {
        response.status(400).json({status: "failed", error: "Group not found"});
    }
}