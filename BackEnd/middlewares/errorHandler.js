function errorHandler(error, req, res, next) {
  let status = "";
  let message = "";

  switch (error.name) {
    case "JsonWebTokenError":
    case "InvalidAccessToken":
      status = 401;
      message = "Invalid token";
      break;
    case "Unauthenticated":
      status = 401;
      message = "Unauthenticated";
      break;
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      status = 400;
      error = error.errors.map((element) => {
        return element.message;
      });
      message = error;
      break;
    case "InvalidFile":
      status = 400;
      message = "PDF File is required";
      break;
    case "InvalidUsername":
      status = 400;
      message = "Username is required";
      break;
    case "InvalidPassword":
      status = 400;
      message = "Password is required";
      break;
    case "Forbidden":
      status = 403;
      message = "Not authorized";
      break;
    case "InvalidCredentials":
      status = 401;
      message = "Invalid username/password";
      break;
    default:
      status = 500;
      message = "Internal server error";
      break;
  }

  console.log(error);
  res.status(status).json({
    message: message,
  });
}

module.exports = errorHandler;
