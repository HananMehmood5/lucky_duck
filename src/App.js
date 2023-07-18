import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import MainLayout from "./components/layout/MainLayout";
import Landing from "./components/pages/Landing.js";
import Wallet from "./components/pages/Wallet.js";
import Settings from "./components/pages/Settings.js";
import Faq from "./components/pages/Faq.js";
import Buyers from "./components/pages/Buyers.js";
import Users from "./components/pages/Users";
import PrizePools from "./components/pages/PrizePools.js";
import Profile from "./components/pages/Profile.js";
import { store } from "./redux/store/store";

import logo from "./logo.svg";
import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        {isLoading ? (
          <Landing />
        ) : (
          <>
            <MainLayout />
            <Routes>
              {/* <Route element={<MainLayout />}> */}
              {/* Main Page Routes */}
              <Route path="/pools" element={<Wallet />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/prizepools" element={<PrizePools />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/buyers" element={<Buyers />} />
              <Route path="/users" element={<Users />} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/" element={<Landing />} /> */}
              <Route path="/*" element={<Navigate to="/pools" />} />
              {/* End of Main Page Routes */}
              {/* </Route> */}
            </Routes>
          </>
        )}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
