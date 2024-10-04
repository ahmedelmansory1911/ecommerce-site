const express = require("express");

const {
  addProductToCart,
  getLoggedUserCart,
  removeSpecificCartItem,
  clearCart,
  updateCartItemQuantity,
  applyCoupon,
} = require("../services/cartService");

const {
  addCartItemValidator,
  updateCartItemValidator,
  getCartValidator,
  deleteCartItemValidator,
} = require("../utils/validators/cartValidator");
const authService = require("../services/authService");

const router = express.Router();

router.use(authService.protect, authService.allowedTo("user"));
router
  .route("/")
  .post(addCartItemValidator, addProductToCart)
  .get(getLoggedUserCart)
  .delete(clearCart);

router.put("/applyCoupon", applyCoupon);

router
  .route("/:itemId")
  .put(updateCartItemValidator, updateCartItemQuantity)
  .delete(deleteCartItemValidator, removeSpecificCartItem);

module.exports = router;
