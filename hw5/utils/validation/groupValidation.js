import Joi from "joi";

export const validationSchemaGroupCreate = Joi.object().keys({
    name: Joi.string().required(),
    permissions: Joi.array().items(Joi.string())
});

export const validationSchemaGroupUpdate = validationSchemaGroupCreate.keys({
    id: Joi.string().guid({version:'uuidv4'}).required()
});