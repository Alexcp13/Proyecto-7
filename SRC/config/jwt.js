const jwt = require("jsonwebtoken");


const generateSign = (user) => {
    const {
        userName,
        _id,
        email,
        rol,
        ageDate

    } = user
    return jwt.sign({
        _id,
        userName,
        email,
        rol,
        ageDate

    }, process.env.JWT_SECRET, { expiresIn: "30d" })
}

const verifyJwt = (token) => {

    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { generateSign, verifyJwt }