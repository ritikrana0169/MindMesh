const express = require("express")
const cors = require('cors');
const app = express()

app.use(express.json())

app.use(cors())
const { exerciseRouter } = require("./routes/exercise.routes")
const { userRouter } = require("./routes/user.routes")
const { connection } = require("./db");
const { auth } = require("./middlewares/Auth.middleware")
// const { role } = require("../middlewares/role.middleware")
require('dotenv').config()


app.use("/user", userRouter)

app.use("/exercise",auth, exerciseRouter)



app.listen(process.env.port, async () => {


    try {
        await connection;
        console.log("connected to the db")
    } catch (error) {
        console.log("could not connected to the db")
        console.log(error.message)
    }
    console.log(`server is running in the port:${process.env.port}`);
})