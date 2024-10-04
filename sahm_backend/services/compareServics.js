// compareService.js
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Add product to compare
// @route   POST /api/v1/compare
// @access  Protected/User
exports.addProductToCompareList = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "User not found.",
    });
  }

  if (!req.body.productId) {
    return res.status(400).json({
      status: "fail",
      message: "Product ID is required.",
    });
  }

  // $addToSet => add productId to compare array if productId does not exist
  user.compare.addToSet(req.body.productId);
  await user.save();

  res.status(200).json({
    status: "success",
    message: "Product added successfully to your compare list.",
    data: user.compare,
  });
});

// @desc    Remove product from compare
// @route   DELETE /api/v1/compare/:productId
// @access  Protected/User
exports.removeProductFromCompareList = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "User not found.",
    });
  }

  if (!req.params.productId) {
    return res.status(400).json({
      status: "fail",
      message: "Product ID is required.",
    });
  }

  // $pull => remove productId from compare array if productId exists
  user.compare.pull(req.params.productId);
  await user.save();

  res.status(200).json({
    status: "success",
    message: "Product removed successfully from your compare list.",
    data: user.compare,
  });
});

// @desc    Get logged user's compare list
// @route   GET /api/v1/compare
// @access  Protected/User
exports.getLoggedUserCompareList = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id).populate("compare");

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "User not found.",
    });
  }

  res.status(200).json({
    status: "success",
    results: user.compare.length,
    data: user.compare,
  });
});
