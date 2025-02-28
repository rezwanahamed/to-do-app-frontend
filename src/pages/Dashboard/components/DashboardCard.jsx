import { CheckCheck, Settings2, X } from "lucide-react";
import moment from "moment";
import PropTypes from "prop-types";

export default function DashboardCard({
  todo,
  settSelectedTodo,
  setIsOpen,
  handleUpdateTodo,
  handleDeleteTodo,
}) {
  return (
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
          <p className="truncate text-sm text-gray-500">{todo?.description}</p>
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
          <p className="truncate text-xs text-gray-500">Due date</p>
          <p className="truncate text-sm font-medium text-gray-900">
            {moment(todo?.dueDate).calendar()}
          </p>
        </div>
      </div>
      <div className="divide-x divide-gray-200 border-t border-gray-200 pt-3">
        <div className="button-group flex w-full gap-3">
          <button
            onClick={() => handleUpdateTodo(todo?._id)}
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-blue-500 bg-blue-500 py-2.5 text-sm text-white transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-transparent hover:text-blue-500"
          >
            Complete <CheckCheck className="h-4 w-4" />
          </button>
          <button
            onClick={() => {
              settSelectedTodo(todo?._id);
              setIsOpen(true);
            }}
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-blue-500 bg-transparent py-2.5 text-sm text-blue-500 transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Edit <Settings2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <button
        onClick={() => handleDeleteTodo(todo?._id)}
        className="absolute top-4 right-4 cursor-pointer rounded-full p-1 text-gray-400 transition-all group-hover:bg-gray-100 group-hover:text-slate-700"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

DashboardCard.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.string,
    dueDate: PropTypes.string,
  }).isRequired,
  settSelectedTodo: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  handleUpdateTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};
