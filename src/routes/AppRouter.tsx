import { Routes, Route, Navigate } from "react-router"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProtectedLayout from "../layouts/ProtectedLayout";
import Dashboard from "../pages/Dashboard";
import CreateLink from "../pages/CreateLinks";

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

        <Route path="user" element={<ProtectedLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="link" element={<CreateLink />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter