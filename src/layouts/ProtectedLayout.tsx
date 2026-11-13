import { Outlet, useNavigate } from "react-router"
import Cookies from "js-cookie"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getUserInfo } from "../redux/slices/user"

const ProtectedLayout = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
      return;
    }

    if (!user) {
      dispatch(getUserInfo());
    }
  }, [dispatch, navigate, user]);

  return <>{<Outlet />}</>;
}

export default ProtectedLayout;