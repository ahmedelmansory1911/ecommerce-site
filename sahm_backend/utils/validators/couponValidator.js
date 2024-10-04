const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");

// Validator for getting a specific coupon by ID
exports.getCouponValidator = [
  check("id").isMongoId().withMessage("Invalid Coupon ID format"),
  validatorMiddleware,
];

// Validator for creating a new coupon
exports.createCouponValidator = [
  check("name")
    .notEmpty()
    .withMessage("Coupon name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Coupon name must be between 3 and 50 characters"),
  check("discount")
    .notEmpty()
    .withMessage("Discount value is required")
    .isFloat({ min: 0, max: 100 })
    .withMessage("Discount value must be between 0 and 100"),
  check("expire")
    .notEmpty()
    .withMessage("Expiry date is required")
    .isISO8601()
    .withMessage("Expiry date must be a valid date format"),
  validatorMiddleware,
];

// Validator for updating a specific coupon
exports.updateCouponValidator = [
  check("id").isMongoId().withMessage("Invalid Coupon ID format"),
  body("name")
    .optional()
    .isLength({ min: 3, max: 50 })
    .withMessage("Coupon name must be between 3 and 50 characters"),
  body("discount")
    .optional()
    .isFloat({ min: 0, max: 100 })
    .withMessage("Discount value must be between 0 and 100"),
  body("expire")
    .optional()
    .isISO8601()
    .withMessage("Expiry date must be a valid date format"),
  validatorMiddleware,
];

// Validator for deleting a specific coupon
exports.deleteCouponValidator = [
  check("id").isMongoId().withMessage("Invalid Coupon ID format"),
  validatorMiddleware,
];
