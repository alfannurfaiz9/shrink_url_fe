import { useState } from "react";
import { FaCheck, FaRegCalendarAlt, FaRegCopy, FaRegTrashAlt } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { Link } from "react-router";
import type { ILinks } from "../../redux/types/link.types";
import moment from "moment";
import { useAppDispatch } from "../../redux/hooks";
import { deleteLink } from "../../redux/slices/link";
import { toast } from "react-toastify";
import { upperCaseMessage } from "../../utils/upperCaseMessage";

const LinkCard = ({ item }: { item: ILinks }) => {
  const dispatch = useAppDispatch()
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const fullUrl = `${baseUrl}/${item.slug}`;

    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await dispatch(deleteLink(item.id)).unwrap()
     toast.success(upperCaseMessage(response.message))
    } catch (error: any) {
      toast.error(upperCaseMessage(error))
    }
  }

  return (
    <div className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray/10 flex items-center justify-between gap-4">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-xl text-primary text-lg mt-1">
          <IoLink />
        </div>
        <div className="flex flex-col gap-1 text-left">
          <Link
            to={`${import.meta.env.VITE_API_URL}/${item.slug}`}
            target="_blank"
            rel="noreferrer"
            className="text-primary font-bold text-sm hover:opacity-80"
          >
            {item.slug}
          </Link>
          <p className="text-dark-gray text-xs md:text-sm truncate max-w-xs md:max-w-md">
            {item.original_url}
          </p>
          <div className="flex items-left flex-col gap-1 lg:flex-row lg:gap-4 mt-2 text-[10px] md:text-xs text-dark-gray/60 font-semibold">
            <div className="flex items-center gap-1.5">
              <FaRegCalendarAlt />
              <span className="uppercase">
                {moment(item.created_at).format("MMM, DD, YYYY")}
              </span>
            </div>
            {/* <div className="flex items-center gap-1.5 uppercase">
              <MdOutlineBarChart className="text-sm" />
              <span>100</span> Clicks
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleCopy}
          title="Copy short link"
          className="hidden lg:flex p-2.5 rounded-lg border border-gray/20 text-dark-gray hover:opacity-70 transition-all cursor-pointer bg-slate-50/50 items-center justify-center"
        >
          {copied ? (
            <FaCheck className="text-sm text-green-600" />
          ) : (
            <FaRegCopy className="text-sm" />
          )}
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="p-2.5 rounded-lg border border-gray/20 text-red-500 hover:opacity-70 transition-all cursor-pointer bg-slate-50/50"
        >
          <FaRegTrashAlt className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default LinkCard