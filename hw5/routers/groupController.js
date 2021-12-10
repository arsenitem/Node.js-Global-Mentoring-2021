import expres from "express";

import groupService from "../services/groupService";
import { validationSchemaGroupCreate,  validationSchemaGroupUpdate } from "../utils/validation/groupValidation";
import { creategroupResponse } from "../utils/index"
import { validateSchema } from "../middlewares/validation"

const router = expres.Router();

router.get('/', async (req, res, next) => {
    try {
        let group = await groupService.findById(req.query.id);
        return creategroupResponse(group, res);
    } catch(err) {
        next(err)
    }
})

router.get('/list', async (req, res, next) => {
    try {
        let groups = await groupService.findAll(req.query.login, req.query.limit);
        res.json(groups);
    }
    catch(err) {
        next(err);
    }
})

router.post('/', validateSchema(validationSchemaGroupCreate), async (req, res, next) => {
    try {
        let body = req.body;
        let group = await groupService.addgroup(body.name, body.permissions);
        res.json(group);
    }
    catch(err) {
        next(err);
    } 
})


router.post('/update', validateSchema(validationSchemaGroupUpdate), async (req, res, next) => {
    try {
        let body = req.body;
        let group = await groupService.updategroup(body.id, body.name, body.permissions); 
        return creategroupResponse(group, res);
    }
    catch(err) {
        next(err);
    }
})

router.post('/remove', async (req, res, next) => {
    try {
        let body = req.body;
        let group = await groupService.deleteById(body.id);
        return creategroupResponse(group, res);
    }
    catch(err) {
        next(err);
    }
})

router.post('/add_users', async (req, res, next) => {
    let body = req.body;
    let result = await groupService.addUsersToGroup(body.group_id, body.user_ids);
    if (result) {
        return res.json({status: "success"});
    } else {
        next(err);
    }
})

export default router;