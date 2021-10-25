import { v4 as uuidv4 } from 'uuid';
import Joi from "joi";

export class User {
    constructor(login, password, age) {
        this.id = uuidv4();
        this.login = login;
        this.password = password;
        this.age = age;
        this.isDeleted = false
    }

    delete() {
        this.isDeleted = true;
    }

    update(login, password, age) {
        this.login = login;
        this.password = password;
        this.age = age;
    }
}

export const validationSchemaCreate = Joi.object().keys({
    login: Joi.string().required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().min(4).max(130).required()
});

export const validationSchemaUpdate = validationSchemaCreate.keys({
    id: Joi.string().guid({version:'uuidv4'}).required()
});
