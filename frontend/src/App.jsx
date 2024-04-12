import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopProducts from "./pages/Products";
import ProductsDetailsPage from "./pages/Product";
import ShopServices from "./pages/Services";
import ServiceDetailsPage from "./pages/Service";
import Memberships from "./pages/Memberships";
import AgentsReferrals from "./pages/AgentReferrals";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import CheckoutProduct from "./pages/Checkout-Product";
import CheckoutForService from "./pages/Checkout-Services";
import CheckoutMembership from "./pages/Checkout-Membership";
import AdvanceUserDashboard from "./pages/Admin/Dashboard";
import AdvanceUserProfile from "./pages/Admin/MyProfile";
import AdvanceUserOrder from "./pages/Admin/OrderData";
import AdvanceUserWishlist from "./pages/Admin/Wishlist";
import AdvanceUserStore from "./pages/Admin/Store";
import AdvanceUserStoreEdit from "./pages/Admin/Store-Edit";
import AdvanceUserStoreProductList from "./pages/Admin/CreateProduct";
import AdvanceUserReferral from "./pages/Admin/Referral";

function App() {
  return (
    <div title="eta07">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ShopProducts />} />
          <Route path="/services" element={<ShopServices />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/agent-referrals" element={<AgentsReferrals />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-product" element={<CheckoutProduct />} />
          <Route
            path="/checkout-service/:id"
            element={<CheckoutForService />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductsDetailsPage />} />
          <Route
            path="/checkout/:membership"
            element={<CheckoutMembership />}
          />
          <Route path="/service/:id" element={<ServiceDetailsPage />} />
          <Route path="/admin/dashboard" element={<AdvanceUserDashboard />} />
          <Route path="/admin/profile" element={<AdvanceUserProfile />} />
          <Route path="/admin/order" element={<AdvanceUserOrder />} />
          <Route path="/admin/wishlist" element={<AdvanceUserWishlist />} />
          <Route path="/admin/store" element={<AdvanceUserStore />} />
          <Route path="/admin/referral" element={<AdvanceUserReferral />} />
          <Route
            path="/admin/create-product"
            element={<AdvanceUserStoreProductList />}
          />
          <Route
            path="/admin/store/edit/:store"
            element={<AdvanceUserStoreEdit />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
