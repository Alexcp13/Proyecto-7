const { isAuth } = require("../../middlewares/auth");
const { registerUser, login, deleteUser, getUsers, getUserById, updateUser } = require("../controllers/userControllers");

const usersRoutes = require("express").Router();


usersRoutes.get("/", getUsers)
usersRoutes.get("/:id", getUserById);
usersRoutes.post("/register", registerUser)
usersRoutes.post("/login", login)
usersRoutes.put("/:id", updateUser);
usersRoutes.delete("/id", [isAuth], deleteUser)





module.exports = usersRoutes;