import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { CMSOrdersPage, CMSPage, CMSProductsPage, CartPage, CheckoutPage, LoginPage, ShopPage, ThanksPage } from "./pages";
import { NavBar } from "@/shared/index";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    
      <div className="page">
        <Routes>
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="thankyou" element={<ThanksPage />} />

          <Route path="cms" element={<CMSPage />}>
            <Route path="products" element={<CMSProductsPage />} />
            <Route path="orders" element={<CMSOrdersPage />} />
            <Route index element={<Navigate to="products" />} />
          </Route>

          <Route path="*" element={<Navigate to="shop" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
