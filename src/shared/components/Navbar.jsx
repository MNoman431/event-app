import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logonavbar from "../../assets/logonavbar.png";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("login") === "true");
  // removed cartOpen state
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const navigate = useNavigate();

  // Listen to localStorage changes (for logout from other tabs)
  useEffect(() => {
    const onStorage = () => setIsLogin(localStorage.getItem("login") === "true");
    const onLoginStatusChanged = () => setIsLogin(localStorage.getItem("login") === "true");
    window.addEventListener("storage", onStorage);
    window.addEventListener("loginStatusChanged", onLoginStatusChanged);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("loginStatusChanged", onLoginStatusChanged);
    };
  }, []);

  // Update state on login/logout in this tab
  useEffect(() => {
    setIsLogin(localStorage.getItem("login") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("login");
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      <div className="flex items-center">
        <img
          src={logonavbar}
          alt="Gather Genie Logo"
          style={{
            width: "55px",
            marginRight: "15px",
            borderRadius: "18px",
          }}
          className="object-contain"
        />
        <h5 className="m-0 text-[1.5rem] leading-[1.334] tracking-[0em] text-[#dac287] font-medium">
          Gather Genie
        </h5>
      </div>
      {isLogin ? (
        <div className="flex items-center gap-4">
          <Link to="/mycart" className="relative" aria-label="Cart">
            <ShoppingCartOutlined style={{ fontSize: 28, color: '#dac287' }} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            to="/profile"
            className="bg-[#dcc58a] hover:bg-[#e6cf94] text-black font-bold px-4 py-2 rounded-[15px] shadow-md transition-all"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-400 hover:bg-red-500 text-white font-bold px-4 py-2 rounded-[15px] shadow-md transition-all"
          >
            Logout
          </button>
          {/* CartDrawer removed, now using /mycart route */}
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-[#dcc58a] hover:bg-[#e6cf94] text-black font-bold px-6 py-2 rounded-[15px] shadow-md transition-all"
        >
          LOGIN
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
