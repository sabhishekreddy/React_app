import React from "react";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import GettingStarted from "./Components/GettingStarted/GettingStarted";
import SignIn from "./Components/Authentication/SignIn/SignIn";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import Recover from "./Components/Authentication/Recovery/Recover";
import Main from "./Components/StoreComponent/Main";
//import Auth from "./Components/Authentication/Auth";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import ProductMain from "./Components/ProductPage/ProductMain";

export default function SubApp() {
  const location = useLocation();

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Outlet />}>
            <Route path="auth">
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="recover" element={<Recover />} />
              <Route index element={<SignIn />} />
            </Route>

            <Route path="store">
              <Route path=":storeid">
                <Route path=":productid" element={<ProductMain />} />
                <Route index element={<Main />} />
              </Route>
            </Route>
            <Route path="product" element={<h1>Product Page</h1>} />

            <Route path="profile" element={<SignIn />}>
              <Route path=":userid" element={<h1>Profile Page</h1>} />
            </Route>

            <Route path="about" element={<h1>About Page</h1>} />
            <Route path="contact" element={<h1>Contact Page</h1>} />
            <Route path="error" element={<h1>Error Page</h1>} />
            <Route index element={<GettingStarted />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

/*

      */
