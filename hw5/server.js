import dotenv from "dotenv";
dotenv.config();

import express from "express";
import userController from "./routers/userController";
import groupController from "./routers/groupController";
import { infoLogger, errorLogger } from "./middlewares/logger";
import logger from './utils/logger'
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(infoLogger());
process
.on('unhandledRejection', (reason, p) => {
    logger.error('Unhandled Rejection at Promise: '+ reason);
})
.on('uncaughtException', err => {
    logger.error('Uncaught Exception thrown: ' +err);
    process.exit(1);
});

app.use('/user', userController);
app.use('/group', groupController);
app.use(errorLogger());
app.listen(port, () => {
    console.log(`App started at port ${port}`)
});