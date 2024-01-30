import React from "react";
import { ColorModeContext, useMode } from "./config/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Distributors from "./pages/distributors";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/distributors" element={<Distributors />} />
            </Routes>
            <ToastContainer />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
