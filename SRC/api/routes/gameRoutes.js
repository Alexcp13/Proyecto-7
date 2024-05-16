const { getGames, getGameById, createGame, updateGame, deleteGame } = require("../controllers/gameControllers");

const gameRoutes = require("express").Router();

gameRoutes.get("/", getGames);
gameRoutes.get("/:id", getGameById);
gameRoutes.post("/", createGame)
gameRoutes.put("/:id", updateGame);
gameRoutes.delete("/:id", deleteGame);

module.exports = gameRoutes;