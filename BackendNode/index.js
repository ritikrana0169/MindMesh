const express=require("express")
const app=express()
app.use(express.json())
const { exerciseRouter } = require("./routes/exercise.routes")

app.use("/exercise",exerciseRouter)

app.listen(7500,()=>{
    console.log("server running at 7500")
})