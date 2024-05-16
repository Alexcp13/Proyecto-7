const { isAuth } = require("../../middlewares/auth");
const { checkRole } = require("../../middlewares/checkRole");
const { getConsoles, getConsoleById, createConsole, updateConsole, deleteConsole } = require("../controllers/consoleControllers");

const consoleRoutes = require("express").Router();

consoleRoutes.get("/", checkRole, getConsoles);
consoleRoutes.get("/:id", getConsoleById);
consoleRoutes.post("/", createConsole)
consoleRoutes.put("/:id", updateConsole);
consoleRoutes.delete("/:id", deleteConsole);

module.exports = consoleRoutes;