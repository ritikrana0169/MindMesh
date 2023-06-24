const express=require("express")
const app=express()
app.use(express.json())
const { exerciseRouter } = require("./routes/exercise.routes")
const { userRouter } = require("./routes/user.routes")
const {connection} = require("./db");
require('dotenv').config()

app.use("/exercise",exerciseRouter)
app.use("/user",userRouter)

// app.listen(7500,async ()=>{
//     try {
//         await connection()
//         console.log("server running at 7500")
//     } catch (error) {
        
//     }
   
// })




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