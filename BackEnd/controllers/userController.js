const { User } = require("../models/index");
const { createToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");

class UserController {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username) throw { name: "InvalidUsername" };
      if (!password) throw { name: "InvalidPassword" };

      const userFound = await User.findOne({
        where: {
          username: username,
        },
      });

      if (!userFound || !comparePassword(password, userFound.password)) {
        throw { name: "InvalidCredentials" };
      }

      const payload = {
        id: userFound.id,
      };

      const access_token = createToken(payload);
      res.status(200).json({
        access_token: access_token,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getUserData(req, res, next) {
    try {
      const foundUser = await User.findOne({
        attributes: { exclude: ["password"] },
        where: {
          id: req.user.id,
        },
      });
      res.status(200).json(foundUser);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
