import { useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import LinkCard from "./LinkCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserLinks } from "../../redux/slices/link";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { links } = useAppSelector((state) => state.link);
  const {metadata} = useAppSelector(state => state.link)
  const loading = useAppSelector((state) => state.link.isPending);

  const handleNext = () => {
    metadata?.next && dispatch(getUserLinks(metadata?.next));
  }

  const handlePrev = () => {
    metadata?.prev && dispatch(getUserLinks(metadata?.prev));
  }

  useEffect(() => {
    dispatch(getUserLinks("links"));
  }, [dispatch]);

  return (
    <section className="w-full bg-slate-50/90 min-h-dvh">
      <div className="section-container py-16 flex flex-col items-center gap-8">
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
                {links !== null && links?.length}
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
            {loading ? (
              <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-gray/10 shadow-sm gap-2 my-auto">
                <p className="text-dark font-semibold text-base">
                  Loading links...
                </p>
                <p className="text-dark-gray text-xs text-center">
                  Please wait while we retrieve your shortened assets.
                </p>
              </div>
            ) : links?.length ? (
              links?.map((item) => <LinkCard key={item.id} item={item} />)
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
          <div
            className={`${links?.length ? "flex" : "hidden"} items-center justify-between w-full pt-4 mt-auto border-t border-gray/10 text-xs font-semibold text-dark-gray`}
          >
            <button
              type="button"
              onClick={handlePrev}
              className="hover:opacity-70 transition-all cursor-pointer"
            >
              Prev Page
            </button>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center font-bold">
                {metadata?.current_page}
              </span>
              <span className="text-dark-gray/50">of</span>
              <span>{metadata?.total_page}</span>
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="hover:opacity-70 transition-all cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
