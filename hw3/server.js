import dotenv from "dotenv";
dotenv.config();

import express from "express";
import userController from "./routers/userController";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userController);

app.listen(port, () => {
    console.log(`App started at port ${port}`)
});