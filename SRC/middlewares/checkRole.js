const User = require("../api/models/userModels");
const { verifyJwt } = require("../config/jwt");


const checkRole = async (req, res, next) => {

    try {



        if (req.user.rol != "admin") {
            throw new Error("No estás autorizado")
        }
        next()

    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = { checkRole }