import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Cookies from "js-cookie"

const AuthLayout = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      navigate("/user/dashboard");
    }
  }, [token, navigate]);

  return (
    <main>
      <Outlet />
    </main>
  );
}

export default AuthLayout