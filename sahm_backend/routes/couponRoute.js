const express = require("express");

const {
  getCoupon,
  getCoupons,
  createCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../services/couponService");

const {
  getCouponValidator,
  createCouponValidator,
  updateCouponValidator,
  deleteCouponValidator,
} = require("../utils/validators/couponValidator");

const authService = require("../services/authService");

const router = express.Router();

// Apply authentication and authorization middleware
router.use(authService.protect, authService.allowedTo("admin", "manager"));

// Routes with validators
router.route("/").get(getCoupons).post(createCouponValidator, createCoupon);

router
  .route("/:id")
  .get(getCouponValidator, getCoupon)
  .put(updateCouponValidator, updateCoupon)
  .delete(deleteCouponValidator, deleteCoupon);

module.exports = router;
