const BookController = require("../controllers/bookController");
const multer = require("multer");
const authentication = require("../middlewares/authentication");
const bookRouter = require("express").Router();

const upload = multer({ dest: "uploads/" });

bookRouter.post(
  "/add",
  authentication,
  upload.single("filePath"),
  BookController.createOne
);

bookRouter.get("/", authentication, BookController.findAll);

module.exports = bookRouter;
