import { Globe } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../../../lib/config/route";
import logo from "../../../assets/images/logo.svg";
import { AuthContext } from "../../../context/AuthContext";

export default function LandingPageNavSection() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <div className="nav-section flex w-screen items-center justify-between px-4 py-5 md:mx-auto md:w-[70rem] md:px-10">
        <div className="left-part md:w-[20%]">
          <img src={logo} alt="app logo" className="h-auto w-8" />
        </div>
        <div className="mid-part hidden w-full items-center justify-center gap-4 md:flex">
          <a
            className="text-md font-geist text-gray-600 duration-200 hover:text-black"
            href=""
          >
            Home
          </a>
          <a
            href=""
            className="text-md font-geist text-gray-600 duration-200 hover:text-black"
          >
            Pricing
          </a>
          <a
            href=""
            className="text-md font-geist text-gray-600 duration-200 hover:text-black"
          >
            FAQs
          </a>
        </div>
        <div className="right-part w-full md:w-[20%]">
          {isAuthenticated ? (
            <div className="button-group flex justify-end gap-2">
              <Link
                to={appRoutes.dashboard}
                className="register-button cursor-pointer rounded-full bg-black px-6 py-2.5 text-sm text-white duration-200 hover:bg-blue-500"
              >
                Dashboard
              </Link>
            </div>
          ) : (
            <div className="button-group flex justify-end gap-2">
              <button className="register-button hidden cursor-pointer items-center gap-0.5 rounded-full px-6 py-2.5 text-sm text-black duration-200 hover:bg-black hover:text-white md:flex">
                English <Globe className="h-4" />
              </button>

              <Link
                to={appRoutes.register}
                className="register-button cursor-pointer rounded-full bg-black px-6 py-2.5 text-sm text-white duration-200 hover:bg-blue-500"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
