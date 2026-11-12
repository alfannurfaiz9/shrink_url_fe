import { Outlet, useNavigate } from "react-router"
import Cookies from "js-cookie"
import { useEffect } from "react"

const ProtectedLayout = () => {
  const navigate = useNavigate()
  const token = Cookies.get("token")

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return <>{<Outlet />}</>;
}

export default ProtectedLayout;