import expres from "express";
import { validateSchema } from "../middlewares/validation"
import { validationAuthSchema } from "../utils/validation/userValidation";
import authService from "../services/authService";

const router = expres.Router();

router.post('/login', validateSchema(validationAuthSchema), async (req, res, next) => {
    try {
        let body = req.body;
        let token = await authService.login(body.login, body.password);
        if (token) {
            return res.json({token: token});
        } else {
            next(err);
        }
    }
    catch(err) {
        next(err);
    }
})

export default router;