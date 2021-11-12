import expres from "express";

import userService from "../services/userService";
import {validationSchemaCreate,  validationSchemaUpdatem, createUserResponse } from "../utils/index";
import {validateSchema, validateResponse} from "../middlewares/validation"

const router = expres.Router();

router.get('/', async (req, res) => {
    let user = await userService.findById(req.query.id);
    return createUserResponse(user, res);
})

router.get('/list', async (req, res) => {
    let users = await userService.findAll(req.query.login, req.query.limit);
    res.json(users);
})

router.post('/', validateSchema(validationSchemaCreate), async (req, res) => {
    let body = req.body;
    let user = await userService.addUser(body.login, body.password, body.age);
    res.json(user);
})


router.post('/update', validateSchema(validationSchemaUpdate), async (req, res) => {
    let body = req.body;
    let user = await userService.updateUser(body.id, body.login, body.password, body.age); 
    return createUserResponse(user, res);
})

router.post('/remove', async (req, res) => {
    let body = req.body;
    let user = await userService.deleteById(body.id);
    return createUserResponse(user, res);
})

export default router;