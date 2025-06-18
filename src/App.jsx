import "./App.scss";
import Login from "./pages/auth/Login";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { isAuthenticated } from "./services/auth";
import "./assets/styles/pages/all.css";

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
        </Routes>
        <ProtectedRoutes />
      </HashRouter>
    </>
  );
}

export default App;
