if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const port = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
const router = require("./routers");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);
app.use("/Books", express.static("./Books"))
app.use(errorHandler);

app.listen(port, () => {
  console.log(`PDF Reader App listening on port ${port}`);
});
