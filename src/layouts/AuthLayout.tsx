import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Cookies from "js-cookie"

const AuthLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = Cookies.get("token");
      if (token) {
        navigate("/user/dashboard");
      }
    }, [navigate]);

  return (
    <main>
      <Outlet />
    </main>
  );
}

export default AuthLayout