const router = require("express").Router();
const userRouter = require("./user");
const bookRouter = require("./book");

router.get("/", (req, res) => {
  res.send("PDF Reader App");
});

router.use("/", userRouter);
router.use("/books", bookRouter);

module.exports = router;