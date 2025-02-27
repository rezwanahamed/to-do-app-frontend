import { CheckCheck, Ghost, Settings2, X } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import useCrud from "../../../../hooks/swrHooks";
import apiEndpoints from "../../../../lib/config/api";
import Model from "../components/Model";

export default function HighPriorityTask() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);

  const { data: todo_data } = useCrud(`${apiEndpoints.getTodos}?priority=High`);
  console.log(todo_data);

  useEffect(() => {
    setTodos(todo_data?.data);
  }, [todo_data]);

  return (
    <>
      {todos && todos.length > 0 ? (
        <>
          <div className="px-5 py-3">
            <div className="items-center justify-between space-x-2 md:flex">
              <h3 className="pb-2 font-semibold text-gray-900 md:mb-0 md:text-xl">
                All High Priority Task
              </h3>
            </div>
            <div className="my-3 mb-2 h-px bg-gray-200" />{" "}
            {/* Custom Divider */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {todos?.map((todo) => (
                <div
                  key={todo?._id}
                  className="group relative rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-blue-500"
                >
                  <div className="flex items-center space-x-4">
                    <div className="truncate">
                      <p className="truncate text-base font-medium text-gray-900">
                        <a href="#" className="focus:outline-none">
                          {todo?.title}
                        </a>
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        {todo?.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 divide-x divide-gray-200 border-t border-gray-200">
                    <div className="truncate px-3 py-2">
                      <p className="truncate text-xs text-gray-500">Priority</p>
                      <p className="truncate text-sm font-medium text-gray-900">
                        {todo?.priority}
                      </p>
                    </div>
                    <div className="truncate px-3 py-2">
                      <p className="truncate text-xs text-gray-500">Created</p>
                      <p className="truncate text-sm font-medium text-gray-900">
                        {moment(todo?.createdAt).startOf("hour").fromNow()}
                      </p>
                    </div>
                  </div>
                  <div className="divide-x divide-gray-200 border-t border-gray-200 pt-3">
                    <div className="button-group flex w-full gap-3">
                      <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-blue-500 bg-blue-500 py-2.5 text-sm text-white transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-transparent hover:text-blue-500">
                        Complete <CheckCheck className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setIsOpen(true)}
                        className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-blue-500 bg-transparent py-2.5 text-sm text-blue-500 transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                      >
                        Edit <Settings2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <span
                    className="pointer-events-none absolute top-4 right-4 rounded-full p-1 text-gray-400 transition-all group-hover:bg-gray-100 group-hover:text-slate-700"
                    aria-hidden={true}
                  >
                    <X className="h-4 w-4" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-96 items-center justify-center gap-2 text-gray-400">
          <p>No task found</p> <Ghost className="h-4 w-4" />
        </div>
      )}

      {isOpen && <Model setIsOpen={setIsOpen} />}
    </>
  );
}
