import { Routes, Route, Navigate } from "react-router"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRouter