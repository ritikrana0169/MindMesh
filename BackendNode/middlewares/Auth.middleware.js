const jwt = require("jsonwebtoken");
const { BlacklistModel } = require("../models/Blacklist.model");

require("dotenv").config();


const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) return res.status(401).send({ msg: "Token not found" });
        const isBlacklisted = await BlacklistModel.findOne({ token: token });
        if (isBlacklisted)
            return res.status(401).send({ msg: "Please Login again" });
        const decoded = jwt.verify(token, process.env.TOKENKEY);
        if (!decoded) return res.status(401).send({ msg: "Invalid token" });
        req.body.UserId = decoded.UserId;
        req.body.role = decoded.role;
        // req.body.username = decoded.username;
        // req.body.level = decoded.level;
        // req.body.track = decoded.track;
        next();
    } catch (error) {
        res.status(401).send({ msg: error.message });
    }
};


module.exports = { auth }