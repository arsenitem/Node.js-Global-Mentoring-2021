import expres from "express";
import storage from "./storage";
import utils from "./utils";
import {User, validationSchemaCreate,  validationSchemaUpdate } from "./User";

const router = expres.Router();

router.get('/', (req, res) => {
    let user = storage.findById(req.query.id);
    res.json(user);
})

router.get('/list', (req, res) => {
    let users = storage.getAutoSuggestUsers(req.query.login, req.query.limit);
    res.json(users);
})

router.post('/', utils.validateSchema(validationSchemaCreate), (req, res) => {
    let body = req.body;
    let user = new User(body.login, body.password, body.age);
    storage.addUser(user);
    res.json(user);
})

router.post('/update', utils.validateSchema(validationSchemaUpdate), (req, res) => {
    let body = req.body;
    let user = storage.findById(body.id);
    if (user) {
        user.update(body.login, body.password, body.age);
        res.json(user);
    } else {
        res.status(400).json({status: "failed", error: "User not found"});
    }
})

router.post('/remove', (req, res) => {
    let body = req.body;
    let user = storage.findById(body.id);
    user.delete();
    res.json(user);
})

export default router;