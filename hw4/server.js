import dotenv from "dotenv";
dotenv.config();

import express from "express";
import userController from "./routers/userController";
import groupController from "./routers/groupController";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userController);
app.use('/group', groupController);

app.listen(port, () => {
    console.log(`App started at port ${port}`)
});