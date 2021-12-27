import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import userController from "./routers/userController";
import groupController from "./routers/groupController";
import authController from "./routers/authController";
import { infoLogger, errorLogger } from "./middlewares/logger";
import { checkToken } from "./middlewares/auth";
import logger from './utils/logger'

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "*"}));
app.use(infoLogger());

process
.on('unhandledRejection', (reason, p) => {
    logger.error('Unhandled Rejection at Promise: '+ reason);
})
.on('uncaughtException', err => {
    logger.error('Uncaught Exception thrown: ' +err);
    process.exit(1);
});

app.use('/user', checkToken, userController);
app.use('/group', checkToken, groupController);
app.use(authController);
app.use(errorLogger());
app.listen(port, () => {
    console.log(`App started at port ${port}`)
});