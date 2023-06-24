const express = require('express')
const userRouter = express.Router()

const {AllUsers, getUsersbyID, signUP, login} = require("../controllers/user.controller")

userRouter.get("/", (req,res) => {
    res.json("This is the admin route")
})

// userRouter.post("/addAdmin", addAdmin)
userRouter.get("/AllUsers",AllUsers)
userRouter.get('/getUser/:id', getUsersbyID)
userRouter.post('/login', login)
userRouter.post("/signUP", signUP)


module.exports = {userRouter}