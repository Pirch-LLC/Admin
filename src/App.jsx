import "./App.scss";
import Login from "./pages/auth/Login";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { isAuthenticated } from "./services/auth";
import "./assets/styles/pages/all.css";
import OtpVerification from "./pages/auth/OtpVerification";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              !isAuthenticated() ? <Login /> : <Navigate to="/users" />
            }
          />
          <Route path="otp-verification" element={<OtpVerification />} />
        </Routes>
        <ProtectedRoutes />
      </HashRouter>
    </>
  );
}

export default App;
