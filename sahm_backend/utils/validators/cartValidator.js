const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");

// Validator for adding items to the cart
exports.addCartItemValidator = [
  check("cartItems.*.product")
    .notEmpty()
    .withMessage("Product ID is required")
    .isMongoId()
    .withMessage("Invalid Product ID format"),
  check("cartItems.*.quantity")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Quantity must be a positive integer"),
  check("cartItems.*.color")
    .optional()
    .isString()
    .withMessage("Color must be a valid string"),
  check("cartItems.*.price")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),
  validatorMiddleware,
];

// Validator for updating a cart item
exports.updateCartItemValidator = [
  check("cartItems.*.product")
    .optional()
    .isMongoId()
    .withMessage("Invalid Product ID format"),
  check("cartItems.*.quantity")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Quantity must be a positive integer"),
  check("cartItems.*.color")
    .optional()
    .isString()
    .withMessage("Color must be a valid string"),
  check("cartItems.*.price")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),
  validatorMiddleware,
];

// Validator for getting a specific cart by user ID
// exports.getCartValidator = [
//   check("user")
//     .notEmpty()
//     .withMessage("User ID is required")
//     .isMongoId()
//     .withMessage("Invalid User ID format"),
//   validatorMiddleware,
// ];

// Validator for deleting a specific cart item
exports.deleteCartItemValidator = [
  check("cartItems.*.product")
    .notEmpty()
    .withMessage("Product ID is required")
    .isMongoId()
    .withMessage("Invalid Product ID format"),
  validatorMiddleware,
];
