import { useForm, type SubmitHandler } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import type { LoginFormInputs } from "./login.types";
import { useState } from "react";
import FeatureUnavailableModal from "../../../components/FeatureUnavailableModal";
import { toast } from "react-toastify";
import { upperCaseMessage } from "../../../utils/upperCaseMessage";
import { login } from "../../../redux/slices/auth";
import { useAppDispatch } from "../../../redux/hooks";
import Cookies from "js-cookie";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await dispatch(login(data)).unwrap();
      const token = response.result.Token;

      Cookies.set("token", token, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
      });
      
      toast.success(upperCaseMessage(response.message));
      navigate("/user/dashboard");
    } catch (error: any) {
      if (error.code === "INVALID_CREDENTIALS") {
        setError("password", {
          type: "custom",
          message: upperCaseMessage(error.message),
        });
        return;
      }

      toast.error(error.message);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <FeatureUnavailableModal isOpen={showModal} onClose={handleCloseModal} />
      <div className="min-h-dvh py-16 w-full bg-slate-50/90 flex flex-col items-center justify-center p-4 gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-xl font-extrabold text-dark tracking-tight">
            ShrinkURL
          </h1>
        </div>
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray/10 flex flex-col gap-6">
          <div className="flex flex-col gap-1 text-left">
            <h2 className="text-2xl font-bold text-dark">Welcome Back</h2>
            <p className="text-dark-gray text-sm">
              Please enter your details to sign in.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-semibold text-dark-gray">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                {...register("email", {
                  required: "Email must be filled",
                })}
                className={`w-full px-4 py-3 rounded-lg border bg-slate-50/30 text-dark placeholder:text-dark-gray/40 text-sm focus:outline-none transition-all ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray/30 focus:border-primary"
                }`}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-dark-gray">
                  Password
                </label>
                <button
                  onClick={() => setShowModal(true)}
                  type="button"
                  className="text-xs text-primary font-medium hover:opacity-80 cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password must be filled",
                  })}
                  className={`w-full px-4 py-3 pr-10 rounded-lg border bg-slate-50/30 text-dark placeholder:text-dark-gray/40 text-sm focus:outline-none transition-all ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray/30 focus:border-primary"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-dark-gray/60 hover:opacity-80 cursor-pointer"
                >
                  {showPassword ? (
                    <IoEyeOutline className="text-lg" />
                  ) : (
                    <IoEyeOffOutline className="text-lg" />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-xs text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md cursor-pointer text-sm"
            >
              <span>Log In</span>
              <FaArrowRight className="text-xs" />
            </button>
          </form>
          <div className="flex items-center gap-4 my-1">
            <div className="border-t border-gray/20 grow"></div>
            <span className="text-[10px] font-semibold tracking-wider text-dark-gray/50 uppercase">
              Or continue with
            </span>
            <div className="border-t border-gray/20 grow"></div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="w-full bg-white text-dark py-3 rounded-lg font-medium border border-gray/20 flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-sm cursor-pointer text-sm"
          >
            <FcGoogle className="text-lg" />
            <span>Sign in with Google</span>
          </button>
        </div>
        <p className="text-xs md:text-sm text-dark-gray">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-primary font-semibold hover:opacity-80"
          >
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;