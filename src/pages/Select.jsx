import { Link } from "react-router-dom";
import ProceedButton from "../components/ui/ProceedButton.jsx";
import Nav from "../components/Nav.jsx";
import BackButton from "../components/ui/BackButton.jsx";

function Select() {
  return (
    <>
      <Nav />
      <p className="mx-7 mb-2 text-xs font-bold lg:text-sm">A.I. ANALYSIS</p>
      <p className="mx-7 mb-2 text-xs font-medium lg:text-sm">
        A.I. HAS ESTIMATED THE FOLLOWING.
      </p>
      <p className="mx-7 text-xs font-medium lg:text-sm">
        FIX ESTIMATED INFORMATION IF NEEDED.
      </p>
      <div className="absolute top-1/2 left-1/2 flex -translate-1/2 items-center justify-center">
        <div className="absolute z-1 size-[20.5dvw] min-h-60 min-w-60 -rotate-45 transition-all [&>*]:absolute [&>*]:overflow-hidden [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-out [&>*:not(.border-dotted)]:size-[10dvw] [&>*:not(.border-dotted)]:transition-transform [&>*:not(.border-dotted)]:duration-300 [&>*:not(.border-dotted)]:hover:bg-gray-300 [&>.border-dotted]:top-1/2 [&>.border-dotted]:left-1/2 [&>.border-dotted]:-z-1 [&>.border-dotted]:size-[20dvw] [&>.border-dotted]:-translate-1/2 [&>.border-dotted]:border-3 [&>.border-dotted]:border-gray-300 [&>.border-dotted]:opacity-0">
          <div className="min-h-29 min-w-29 cursor-not-allowed bg-gray-100 [&:hover~.medium-box]:size-[28dvw] [&:hover~.medium-box]:opacity-100">
            <p className="absolute top-1/2 left-1/2 -translate-1/2 rotate-45 text-sm font-semibold lg:text-base">
              COSMETIC
              <br />
              CONCERNS
            </p>
          </div>
          <Link
            to={"/summary"}
            className="right-0 min-h-29 min-w-29 cursor-pointer bg-gray-200 hover:scale-105 [&:hover~.small-box]:size-[24dvw] [&:hover~.small-box]:opacity-100"
          >
            <div>
              <p className="absolute top-1/2 left-1/2 -translate-1/2 rotate-45 text-sm font-semibold lg:text-base">
                DEMOGRAPHICS
              </p>
            </div>
          </Link>
          <div className="bottom-0 min-h-29 min-w-29 cursor-not-allowed bg-gray-100 [&:hover~.large-box]:size-[32vw] [&:hover~.large-box]:opacity-100">
            <p className="absolute top-1/2 left-1/2 -translate-1/2 rotate-45 text-sm font-semibold lg:text-base">
              WEATHER
            </p>
          </div>
          <div className="right-0 bottom-0 min-h-29 min-w-29 cursor-not-allowed bg-gray-100 [&:hover~.medium-box]:size-[28dvw] [&:hover~.medium-box]:opacity-100">
            <p className="absolute top-1/2 left-1/2 -translate-1/2 rotate-45 text-sm font-semibold lg:text-base">
              SKIN&nbsp;TYPE&nbsp;DETAILS
            </p>
          </div>
          <div className="small-box hidden border-dotted xl:block"></div>
          <div className="medium-box hidden border-dotted xl:block"></div>
          <div className="large-box hidden border-dotted xl:block"></div>
        </div>
      </div>
      <BackButton page={"result"} />
      <ProceedButton page={"summary"} text={"SUMMARY"} />
    </>
  );
}

export default Select;
