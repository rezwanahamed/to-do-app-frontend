import { Link } from "react-router-dom";
import appRoutes from "../../../../lib/config/route";
import hero from "../../../assets/images/hero.svg";

export default function HeroSection() {
  return (
    <>
      <div className="wrapper flex w-screen flex-col items-center justify-center px-4 md:mt-[-3rem] md:h-screen md:px-0">
        <img src={hero} className="h-[20rem] w-[20rem]" alt="task management" />
        <div className="center-content flex w-full items-center justify-center">
          <h2 className="font-europa text-center text-3xl md:w-[20%]">
            Say <span className="font-europa-italic">Hello</span> to the new era
            on task <span className="font-europa-italic">management</span>{" "}
          </h2>
        </div>
        <p className="font-geist mt-3 w-full text-center text-sm font-[400] tracking-wider text-gray-400 md:w-[25%]">
          Stay organized and boost productivity with TaskFlow – your smart,
          simple, and efficient to-do app.
        </p>

        <Link
          to={appRoutes.register}
          className="text-md mt-10 mb-2 flex w-max cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-[3rem] py-3 font-medium text-white duration-200 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Get started{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
