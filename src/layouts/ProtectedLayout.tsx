import { Outlet, useNavigate } from "react-router"
import Cookies from "js-cookie"
import { useEffect } from "react"

const ProtectedLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return <>{<Outlet />}</>;
}

export default ProtectedLayout;