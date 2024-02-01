import React from "react";
import { ColorModeContext, useMode } from "./config/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Distributors from "./pages/distributors";
import Users from "./pages/users";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const location = useLocation();
  const authToken = localStorage.getItem("authToken");
  console.log("Current path:", location.pathname);

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {location.pathname !== "/" ? <Sidebar /> : null}
          <main className="content">
            {location.pathname !== "/" ? <Topbar /> : null}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/distributors" element={<Distributors />} />
              <Route path="/users" element={<Users />} />
            </Routes>
            <ToastContainer />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
