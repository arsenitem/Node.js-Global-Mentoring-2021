import expres from "express";

import userService from "../services/userService";
import {validationSchemaCreate,  validationSchemaUpdate } from "../utils/index";
import validateSchema from "../middlewares/validation"

const router = expres.Router();

router.get('/', async (req, res) => {
    let user = await userService.findById(req.query.id);
    if (user) {
        res.json(user);
    } else {
        res.status(400).json({status: "failed", error: "User not found"});
    }
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
    
    if (user) {
        res.json(user);
    } else {
        res.status(400).json({status: "failed", error: "User not found"});
    }
})

router.post('/remove', async (req, res) => {
    let body = req.body;
    let user = await userService.deleteById(body.id);
    if (user) {
        res.json(user);
    } else {
        res.status(400).json({status: "failed", error: "User not found"});
    }
})

export default router;