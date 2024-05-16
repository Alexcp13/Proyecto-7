const User = require("../api/models/userModels");
const { verifyJwt } = require("../config/jwt");


const checkRole = async (req, res, next) => {

    try {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(400).json("No estás autorizado")
        }

        //Importasnte este espacio ----->
        const parsedToken = token.replace("Bearer ", "")
        const { rol } = verifyJwt(parsedToken);
        if (rol != "admin") {
            console.log(rol)
            throw new Error("No tienes permisos")
        }
        next()
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = { checkRole }