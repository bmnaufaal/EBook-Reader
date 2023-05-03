const UserController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");

const userRouter = require("express").Router();

userRouter.post("/login", UserController.login);
userRouter.get("/getUserData", authentication, UserController.getUserData);

module.exports = userRouter;
