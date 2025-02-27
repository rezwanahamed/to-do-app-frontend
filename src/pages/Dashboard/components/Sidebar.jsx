import {
  BadgePlus,
  Circle,
  CircleCheck,
  CircleCheckBig,
  CircleDashed,
  Command,
  Settings2,
  UserCircle,
} from "lucide-react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";


export default function DashboardSidebar({ children }) {
  const { logout } = useContext(AuthContext);
  return (
    <div className="font-geist">
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 h-screen w-64 -translate-x-full border-r border-slate-300 transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 py-4">
          <div className="aside-heading mb-4 border-b border-slate-300 px-3 pb-4">
            <Link
              to={"/dashboard"}
              className="group flex items-center rounded-lg text-gray-900"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 p-2 text-white">
                <Command className="h-5 w-5" />
              </span>
              <div className="span-group flex flex-col gap-0 space-x-0">
                <span className="ms-3 text-lg font-bold">Dashboard</span>
                <span className="ms-3 mt-[-8px] text-base">v1.0.0</span>
              </div>
            </Link>
          </div>
          <ul className="space-y-2 px-3 font-medium">
            <li>
              <Link
                to={"/dashboard/add-todo"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <BadgePlus className="h-5 w-5" />
                <span className="ms-2 flex-1 whitespace-nowrap">Add Task</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/user"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <CircleCheck className="h-5 w-5" />
                <span className="ms-2 flex-1 whitespace-nowrap">
                  Total Task
                </span>
                <span className="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/user"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <CircleDashed className="h-5 w-5" />
                <span className="ms-2 flex-1 whitespace-nowrap">
                  Pending Task
                </span>
                <span className="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/user"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <CircleCheckBig className="h-5 w-5" />
                <span className="ms-2 flex-1 whitespace-nowrap">
                  Completed Task
                </span>
                <span className="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800">
                  3
                </span>
              </Link>
            </li>
          </ul>

          {/* task status  */}
          <ul className="mt-5 px-3 font-medium">
            <h3 className="mb-3 ml-3 text-sm font-medium text-gray-500">
              All Status
            </h3>
            <li>
              <Link
                to={"/dashboard/add-todo"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <Circle fill="#1C64F2" stroke="#1C64F2" className="h-4 w-4" />
                <span className="ms-2 flex-1 whitespace-nowrap">High</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/user"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <Circle fill="#76A9FA" stroke="#76A9FA" className="h-4 w-4" />
                <span className="ms-2 flex-1 whitespace-nowrap">Medium</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/user"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <Circle fill="#C3DDFD" stroke="#C3DDFD" className="h-4 w-4" />
                <span className="ms-2 flex-1 whitespace-nowrap">Low</span>
              </Link>
            </li>
          </ul>

          {/* bottom access */}
          <ul className="absolute bottom-5 mt-4 w-[-webkit-fill-available] space-y-2 border-t border-gray-200 px-3 pt-4 font-medium">
            <li>
              <Link
                to={"/dashboard/user"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <UserCircle className="h-5 w-5" />
                <span className="ms-2 flex-1 text-base whitespace-nowrap">
                  User Details
                </span>
                <span className="t ms-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-xs font-medium text-gray-800">
                  Pro
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/settings"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <Settings2 className="h-5 w-5" />
                <span className="ms-2 flex-1 whitespace-nowrap">Settings</span>
              </Link>
            </li>
            <li className="pt-4">
              <button onClick={()=>logout()} className="cursor-pointer group flex w-full items-center justify-center rounded-lg border border-blue-600 bg-blue-600 p-2 text-white transition duration-75 hover:bg-transparent hover:text-blue-600">
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* body part */}
      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
}

DashboardSidebar.propTypes = {
  children: PropTypes.node,
};
