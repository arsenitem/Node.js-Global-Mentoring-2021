import express from "express";
import userRouter from "./userRouter";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`App started at port ${port}`)
});