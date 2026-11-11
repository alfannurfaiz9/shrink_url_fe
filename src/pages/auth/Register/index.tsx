import { useForm, type SubmitHandler } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import type { RegisterFormInputs } from "./register.types";
import { useEffect } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    const { password, confirm_password } = data;
    if (password !== confirm_password) {
      setError("confirm_password", {
        type: "custom",
        message: "Confirm password doesn't match",
      });
      return;
    }
  };

  useEffect(() => {
    clearErrors();
  }, []);

  return (
    <div className="min-h-dvh py-16 w-full bg-slate-50/90 flex flex-col items-center justify-center p-4 gap-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-bold text-dark">
            Create Account
          </h1>
          <p className="text-dark-gray text-sm md:text-base">
            Join the elite architects of the web.
          </p>
        </div>
      </div>
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray/10 flex flex-col gap-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
            <label className="text-xs font-semibold text-dark-gray">
              Fullname
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register("full_name", {
                required: "Fullname must be filled",
                minLength: {
                  value: 3,
                  message: "Fullname must be at least 3 characters",
                },
                maxLength: {
                  value: 100,
                  message: "Fullname must be at most 100 characters",
                },
              })}
              className={`w-full px-4 py-3 rounded-lg border bg-slate-50/30 text-dark placeholder:text-dark-gray/40 text-sm focus:outline-none transition-all ${
                errors.full_name 
                  ? "border-red-500 focus:border-red-500" 
                  : "border-gray/30 focus:border-primary"
              }`}
            />
            {errors.full_name && (
              <span className="text-xs text-red-500">
                {errors.full_name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 text-left">
            <label className="text-xs font-semibold text-dark-gray">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password must be filled",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                maxLength: {
                  value: 72,
                  message: "Password must be at most 72 characters",
                },
              })}
              className={`w-full px-4 py-3 rounded-lg border bg-slate-50/30 text-dark placeholder:text-dark-gray/40 text-sm focus:outline-none transition-all ${
                errors.password 
                  ? "border-red-500 focus:border-red-500" 
                  : "border-gray/30 focus:border-primary"
              }`}
            />
            <span className="text-[10px] font-semibold tracking-wider text-dark-gray/50 uppercase">
              MINIMUM 8 CHARACTERS
            </span>
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 text-left">
            <label className="text-xs font-semibold text-dark-gray">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("confirm_password", {
                required: "Confirm password must be filled",
              })}
              className={`w-full px-4 py-3 rounded-lg border bg-slate-50/30 text-dark placeholder:text-dark-gray/40 text-sm focus:outline-none transition-all ${
                errors.confirm_password 
                  ? "border-red-500 focus:border-red-500" 
                  : "border-gray/30 focus:border-primary"
              }`}
            />
            {errors.confirm_password && (
              <span className="text-xs text-red-500">
                {errors.confirm_password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md cursor-pointer text-sm"
          >
            <span>Sign Up</span>
            <FaArrowRight className="text-xs" />
          </button>
        </form>
        <p className="text-center text-xs text-dark-gray/70 leading-relaxed">
          By signing up, you agree to our{" "}
          <Link
            to="/terms"
            className="text-primary hover:opacity-80 font-medium"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="text-primary hover:opacity-80 font-medium"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      <p className="text-xs md:text-sm text-dark-gray">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-primary font-semibold hover:opacity-80"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};
export default Register;