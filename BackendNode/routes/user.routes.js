const express = require('express')
const userRouter = express.Router()

const { AllUsers, deleteuser, signUP, login, logout } = require("../controllers/user.controller")
const { auth } = require("../middlewares/Auth.middleware")
const { role } = require("../middlewares/role.middleware")

userRouter.get("/", (req,res) => {
    res.json("This is the admin route")
})

// userRouter.post("/addAdmin", addAdmin)

userRouter.post("/signUP", signUP)
userRouter.post("/login", login)
userRouter.get("/logout", auth, logout)
userRouter.get("/AllUsers", auth, AllUsers)
// userRouter.get("/:id", userdata)
userRouter.delete("/deleteuser/:id", auth, role(["Admin"]), deleteuser)



module.exports = {userRouter}