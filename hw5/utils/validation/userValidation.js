import Joi from "joi";

export const validationSchemaUserCreate = Joi.object().keys({
    login: Joi.string().required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().min(4).max(130).required()
});

export const validationSchemaUserUpdate = validationSchemaUserCreate.keys({
    id: Joi.string().guid({version:'uuidv4'}).required()
});

export const validationAuthSchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().alphanum().required()
  });