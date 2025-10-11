import { Link } from "react-router-dom";

function ProceedButton({ page, text, summary }) {
  return (
    <Link
      to={`/${page}`}
      className={`left-arrow absolute right-10 ${summary ? "-bottom-1" : "bottom-3"} z-1 -translate-y-1/2 ${page === "result" && "animate-fade-right"} text-sm transition-all duration-900 ease-in-out`}
    >
      <div className="group flex items-center gap-x-5">
        <span className="font-semibold">{text}</span>
        <div className="rotate-45 items-center border-1 p-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
          <span className="left-0 flex aspect-square w-[40px] translate-x-[2px] -translate-y-[2px] -rotate-45 items-center justify-center text-center">
            ▶
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProceedButton;
