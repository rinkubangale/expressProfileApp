const express = require("express");
const router = express.Router();

const { getAllUsers, getAllUsersTest } = require("../controllers/products");

router.route("/").get(getAllUsers);
router.route("/test").get(getAllUsersTest);

module.exports = router;
