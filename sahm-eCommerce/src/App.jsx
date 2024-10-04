/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";
import Account from "./pages/user/Account";
import ProductsCompare from "./pages/product/ProductsCompare";
import ShoppingCart from "./pages/product/ShopingCart";
import UserAccount from "./pages/user/UserAccount";
import EditAccountPage from "./pages/user/myAccount/EditAccountPage";
import ChangePasswordPage from "./pages/user/myAccount/ChangePasswordPage";
import Address from "./pages/user/myAccount/AddressPage";
import NewsletterPage from "./pages/user/myAccount/NewsletterPage";
import OrderHistoryPage from "./pages/user/myOrder/OrderHistoryPage";
import DownloadPage from "./pages/user/myOrder/DownloadPage";
import RewardsPage from "./pages/user/myOrder/RewardsPage";
import ReturnPage from "./pages/user/myOrder/ReturnPage";
import TransactionsPage from "./pages/user/myOrder/TransactionsPage";
import PaymentPage from "./pages/user/myOrder/PaymentPage";
import AffiliatePage from "./pages/user/affiliateAccount/AffiliatePage";
import WishListPage from "./pages/user/myStuff/WishListPage";
import RecurringPayments from "./pages/user/myStuff/RecurringPaymentsPage";
import ForgotPasswordPage from "./pages/user/myAccount/ForgotPasswordPage";
import VerifyRestCodePage from "./pages/user/myAccount/VerifyRestCodePage";
import RestPasswordPage from "./pages/user/myAccount/RestPasswordPage";
import ProductDetailsPage from "./pages/product/ProductDetailsPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryThunk } from "./features/categories/categoriesThunks";
import { fetchProductThunk } from "./features/products/productsThunks";
import { useAuthContext } from "./hooks/useAuthContext";
import "./i18n.js";
import Loader from "./utils/Loader";
import CategorySinglePage from "./pages/category/CategorySinglePage";
function App() {
  const { user } = useAuthContext();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const products = useSelector((state) => state.products.products);
  console.log(categories);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Assuming you're using React Router and location is needed

  useEffect(() => {
    if (!categories || categories?.length === 0) {
      dispatch(fetchCategoryThunk());
      dispatch(fetchProductThunk());
    }
  }, [dispatch, categories]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />}>
          <Route index element={<Navigate to="login" replace />} />
          {!user ? (
            <>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </>
          ) : (
            // Redirect to home or account page if the user is logged in
            <Route path="*" element={<Navigate to="/account/my-account" />} />
          )}
          <Route path="my-account" element={<UserAccount />} />
          <Route path="edit-account" element={<EditAccountPage />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
          <Route path="address" element={<Address />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="order-history" element={<OrderHistoryPage />} />
          <Route path="download" element={<DownloadPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="return" element={<ReturnPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="affiliate" element={<AffiliatePage />} />
          <Route path="wish-list" element={<WishListPage />} />
          <Route path="recurring-payments" element={<RecurringPayments />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="verify-rest-code" element={<VerifyRestCodePage />} />
          <Route path="rest-password" element={<RestPasswordPage />} />
        </Route>
        <Route path="/comparison" element={<ProductsCompare />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route
          path="/category/:categoryName"
          element={<CategorySinglePage />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
