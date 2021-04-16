const express = require("express");
const { UserSchema } = require("../apiSchema/userSchema");
const UserController = require("../controller/UserController");
const {
  validateBody,
  validateQueryParams,
} = require("../middleware/joiSchemaValidation");

const router = express.Router();
const us = new UserSchema();
router.post("/signup", validateBody(us.create), UserController.create);
router.post("/login", validateBody(us.create), UserController.login);
router.get("/:id", UserController.show);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);
module.exports = router;
