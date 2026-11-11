import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import type { LinkItem } from "./link.types";
import LinkCard from "./LinkCard";

const dummyLinks: LinkItem[] = [
  {
    id: "1",
    slug: "aB3x9",
    original_url: "https://www.google.com",
    created_at: "Oct 24, 2023",
    clicks: "1.2K",
  },
  {
    id: "2",
    slug: "v9Pq2",
    original_url: "https://www.google.com",
    created_at: "Oct 21, 2023",
    clicks: "842",
  },
  {
    id: "3",
    slug: "zR4t1",
    original_url: "https://www.google.com",
    created_at: "Oct 19, 2023",
    clicks: "2.4K",
  },
  {
    id: "4",
    slug: "ml5k8",
    original_url: "https://www.google.com",
    created_at: "Oct 15, 2023",
    clicks: "341",
  },
];

const Dashboard = () => {
  const [links] = useState<LinkItem[]>(dummyLinks);

  return (
    <div className="min-h-dvh py-16 w-full bg-slate-50/90 flex flex-col items-center p-4 gap-8">
      <div className="w-full max-w-3xl flex flex-col gap-8 grow">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-1 text-left max-w-8/12">
            <h1 className="text-2xl md:text-3xl font-bold text-dark">
              My Links
            </h1>
            <p className="text-dark-gray text-sm">
              Manage and track your shortened digital assets.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-semibold tracking-wider text-dark-gray/50 uppercase">
              TOTAL ACTIVE
            </span>
            <span className="text-2xl md:text-3xl font-extrabold text-primary">
              {links.length > 0 ? "124" : "0"}
            </span>
          </div>
        </div>
        <div className="relative flex items-center w-full">
          <IoSearchOutline className="absolute left-4 text-dark-gray/40 text-lg" />
          <input
            type="text"
            placeholder="Search by name or URL..."
            className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray/20 bg-white text-dark placeholder:text-dark-gray/40 text-sm focus:outline-none focus:border-primary transition-all shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-4 grow">
          {links.length > 0 ? (
            links.map((item) => <LinkCard key={item.id} item={item} />)
          ) : (
            <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-gray/10 shadow-sm gap-2 my-auto">
              <p className="text-dark font-semibold text-base">
                No links found
              </p>
              <p className="text-dark-gray text-xs text-center">
                You don't have any shortened links yet. Create one to get
                started.
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between w-full pt-4 mt-auto border-t border-gray/10 text-xs font-semibold text-dark-gray">
          <button
            type="button"
            className="hover:opacity-70 transition-all cursor-pointer"
          >
            Prev Page
          </button>
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center font-bold">
              1
            </span>
            <span className="text-dark-gray/50">of</span>
            <span>5</span>
          </div>
          <button
            type="button"
            className="hover:opacity-70 transition-all cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;