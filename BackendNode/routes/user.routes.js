const express = require('express')
const userRouter = express.Router()


const { AllUsers, deleteuser, signUP, login, logout, getUsersbyID } = require("../controllers/user.controller")
const { auth } = require("../middlewares/Auth.middleware")
const { role } = require("../middlewares/role.middleware")

userRouter.get("/", (req,res) => {
    res.json("This is the admin route")
})

// userRouter.post("/addAdmin", addAdmin)

userRouter.post("/signUP", signUP)
userRouter.post("/login", login)
userRouter.get("/logout", logout)
userRouter.get("/AllUsers", AllUsers)
userRouter.get("/AllUsers/:id", getUsersbyID)
userRouter.delete("/deleteuser/:id", deleteuser)


userRouter.patch("/updateUser/:id", updateUser)


module.exports = {userRouter}