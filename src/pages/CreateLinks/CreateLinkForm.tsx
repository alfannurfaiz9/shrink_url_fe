import { useForm, type SubmitHandler } from "react-hook-form";
import { FaBolt } from "react-icons/fa";
import { IoEyeOutline, IoLinkOutline } from "react-icons/io5";
import { Link } from "react-router";
import type { CreateLinkFormInputs } from "./form.types";

const CreateLinkForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<CreateLinkFormInputs>({});

  const customSlug = watch("custom_slug");
  const reservedWord = ["api", "login", "register", "dashboard"]

  const onSubmit: SubmitHandler<CreateLinkFormInputs> = (data) => {
   if (data.custom_slug.length > 0 && (data.custom_slug.length < 3 || data.custom_slug.length > 50)) {
     setError("custom_slug", {
       type: "custom",
       message: "Custom slug must be between 3 and 50 characters",
     });
     return;
   }

    const hasReservedWord = reservedWord.some((word) =>
      data.custom_slug.toLowerCase().includes(word.toLowerCase()),
    );

    if (hasReservedWord) {
      setError("custom_slug", {
        type: "custom",
        message: `Custom slug cannot contain reserved words (${reservedWord.join(", ")})`,
      });
      return;
    }

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full text-left"
    >
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-dark-gray uppercase tracking-wider">
          DESTINATION URL <span className="text-red-500">*</span>
        </label>
        <div className="relative flex items-center">
          <IoLinkOutline className="absolute left-4 text-dark-gray/40 text-lg" />
          <input
            type="url"
            placeholder="https://example.com/your-long-url-here"
            {...register("destinationUrl", {
              required: "Destination URL must be filled",
            })}
            className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-slate-50/30 text-dark placeholder:text-dark-gray/40 text-sm focus:outline-none transition-all ${
              errors.destinationUrl
                ? "border-red-500 focus:border-red-500"
                : "border-gray/20 focus:border-primary"
            }`}
          />
        </div>
        <span className="text-[11px] text-dark-gray/60">
          Ensure your URL starts with http:// or https://
        </span>
        {errors.destinationUrl && (
          <span className="text-xs text-red-500">
            {errors.destinationUrl.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-dark-gray uppercase tracking-wider">
          CUSTOM SLUG (OPTIONAL)
        </label>
        <div
          className={`flex items-center rounded-xl border bg-slate-50/30 overflow-hidden transition-all ${
            errors.custom_slug
              ? "border-red-500"
              : "border-gray/20 focus-within:border-primary"
          }`}
        >
          <div className="bg-gray/10 px-4 py-3 text-dark-gray/60 text-sm font-medium border-r border-gray/20">
            {`${import.meta.env.VITE_API_URL}/`}
          </div>
          <input
            type="text"
            placeholder="my-custom-slug"
            {...register("custom_slug", {
              pattern: {
                value: /^[a-zA-Z0-9-]+$/,
                message:
                  "Custom slug cannot contain spaces or special characters (only letters, numbers, and hyphens are allowed)",
              },
            })}
            className="w-full px-4 py-3 bg-transparent text-dark placeholder:text-dark-gray/40 text-sm focus:outline-none"
          />
        </div>
        <span className="text-[11px] text-dark-gray/60">
          Leave blank to generate a random unique identifier.
        </span>
        {errors.custom_slug && (
          <span className="text-xs text-red-500">
            {errors.custom_slug.message}
          </span>
        )}
      </div>
      <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
          <IoEyeOutline className="text-sm" />
          <span>LIVE PREVIEW</span>
        </div>
        <p className="text-xs text-dark">
          Your short link will be:
          <span className="font-semibold text-primary">
            {`${import.meta.env.VITE_API_URL}/${customSlug || "random"}`}
          </span>
        </p>
      </div>
      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md cursor-pointer text-sm"
        >
          <span>Create Link</span>
          <FaBolt className="text-xs" />
        </button>
        <Link
          to="/user/dashboard"
          className="px-6 py-3 rounded-xl font-medium text-dark-gray hover:opacity-70 transition-all text-sm text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default CreateLinkForm