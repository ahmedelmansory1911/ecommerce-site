const express = require("express");

const authService = require("../services/authService");

const {
  addProductToCompareList,
  removeProductFromCompareList,
  getLoggedUserCompareList,
} = require("../services/compareServics");

const router = express.Router();

router.use(authService.protect, authService.allowedTo("user"));

router.route("/").post(addProductToCompareList).get(getLoggedUserCompareList);

router.delete("/:productId", removeProductFromCompareList);

module.exports = router;
