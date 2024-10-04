import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import wishlistReducer from "./features/wishlist/wishlistSlice";
import cartReducer from "./features/cart/cartSlice";
import compareReducer from "./features/compare/compareSlice";
import categoryReducer from "./features/categories/categoriesSlice";
import productReducer from "./features/products/productSlice";
import profileReducer from "./features/profile/profileSlice";
import languageReducer from "./features/language/languageSlice";
// Combine your reducers
const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
  compare: compareReducer,
  categories: categoryReducer,
  products: productReducer,
  profiles: profileReducer,
  language:languageReducer ,

});

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["wishlist", "cart", "compare"],
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
