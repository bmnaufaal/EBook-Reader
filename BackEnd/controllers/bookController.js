const { Book } = require("../models/index");
const multer = require("multer");
const path = require("path");

class BookController {
  static async createOne(req, res, next) {
    try {
      if (!req.file) throw { name: "InvalidFile" };
      await Book.create({
        fileName: req.file.filename,
        filePath: req.file.path,
        userId: req.user.id,
      });
      res.status(201).json({
        message: "Success upload PDF",
      });
    } catch (error) {
      next(error);
    }
  }

  static async findAll(req, res, next) {
    try {
      const books = await Book.findAll({
        where: {
          userId: req.user.id,
        },
      });
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  static async findOne(req, res, next) {}
}

module.exports = BookController;
