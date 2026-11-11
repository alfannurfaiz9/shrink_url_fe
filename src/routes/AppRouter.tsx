import { Routes, Route, Navigate } from "react-router"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<MainLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRouter