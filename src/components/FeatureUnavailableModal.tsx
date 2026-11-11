import { IoWarningOutline, IoCloseOutline } from "react-icons/io5";

type FeatureUnavailableModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FeatureUnavailableModal = ({
  isOpen,
  onClose,
}: FeatureUnavailableModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/40 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl border border-gray/10 flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-dark-gray/60 hover:text-dark transition-colors cursor-pointer"
        >
          <IoCloseOutline className="text-xl" />
        </button>
        <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 text-3xl">
          <IoWarningOutline />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-dark">
            Feature Not Available Yet
          </h2>
          <p className="text-dark-gray text-xs md:text-sm leading-relaxed">
            We are currently working hard to build and optimize this feature for your architectural workflow. Stay tuned for future updates!
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition-all shadow-md cursor-pointer text-sm"
        >
          Got It
        </button>
      </div>
    </div>
  );
};

export default FeatureUnavailableModal;