import expres from "express";

import userService from "../services/userService";
import { validationSchemaUserCreate,  validationSchemaUserUpdate } from "../utils/validation/userValidation";
import { createUserResponse } from "../utils/index"
import { validateSchema } from "../middlewares/validation"

const router = expres.Router();

router.get('/', async (req, res, next) => {
    try {
        let user = await userService.findById(req.query.id);
        return createUserResponse(user, res);
    } catch(err) {
        next(err);
    }
})

router.get('/list', async (req, res, next) => {
    try {
        let users = await userService.findAll(req.query.login, req.query.limit);
        res.json(users);
    } catch(err) {
        next(err);
    }
})

router.post('/', validateSchema(validationSchemaUserCreate), async (req, res, next) => {
    try {
        let body = req.body;
        let user = await userService.addUser(body.login, body.password, body.age);
        res.json(user);
    } catch(err) {
        next(err);
    }
})


router.post('/update', validateSchema(validationSchemaUserUpdate), async (req, res, next) => {
    try {
        let body = req.body;
        let user = await userService.updateUser(body.id, body.login, body.password, body.age); 
        return createUserResponse(user, res);
    } catch(err) {
        next(err);
    }
})

router.post('/remove', async (req, res, next) => {
    try {
        let body = req.body;
        let user = await userService.deleteById(body.id);
        return createUserResponse(user, res);
    } catch(err) {
        next(err);
    }
})

export default router;