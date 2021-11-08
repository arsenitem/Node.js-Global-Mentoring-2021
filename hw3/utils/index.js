import Joi from "joi";

export const validationSchemaCreate = Joi.object().keys({
    login: Joi.string().required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().min(4).max(130).required()
});

export const validationSchemaUpdate = validationSchemaCreate.keys({
    id: Joi.string().guid({version:'uuidv4'}).required()
});