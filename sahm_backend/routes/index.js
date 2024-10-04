const authUsersRoute = require("./authRoute");
const userRoute = require("./userRoute");
const categoryRoute = require("./categoryRoute");
const subCategoryRoute = require("./subCategoryRoute");
const brandRoute = require("./brandRoute");
const productRoute = require("./productRoute");
const reviewRoute = require("./reviewRoute");
const wishlistRoute = require("./wishlistRoute");
const compareRoute = require("./compareRoute");
const couponRoute = require("./couponRoute");
const cartRoute = require("./cartRoute");

function mountRoutes(app) {
  app.use("/api/auth", authUsersRoute);
  app.use("/api/users", userRoute);
  app.use("/api/categories", categoryRoute);
  app.use("/api/subCategories", subCategoryRoute);
  app.use("/api/brands", brandRoute);
  app.use("/api/product", productRoute);
  app.use("/api/review", reviewRoute);
  app.use("/api/wishlist", wishlistRoute);
  app.use("/api/comparelist", compareRoute);
  app.use("/api/coupons", couponRoute);
  app.use("/api/cart", cartRoute);
}

module.exports = mountRoutes;
