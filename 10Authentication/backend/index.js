import dotenv from "dotenv"
dotenv.config()
import { app } from "./app.js";


app.listen(process.env.PORT, () => {
    console.log(`server is runing at port : ${process.env.PORT}`);
})