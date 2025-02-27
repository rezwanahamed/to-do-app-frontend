import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import apiEndpoints from "../../../../lib/config/api";
import axiosInstance from "../../../../lib/config/axiosInstance";

export default function Model({ setIsOpen, modalData }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `${apiEndpoints.updateTodo}/${modalData}`,
        );
        setTodos(response.data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchData();
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      title: data.title,
      description: data.description,
      createdAt: data.date,
      priority: data.priority,
    };
    console.log(payload)
    try {
      await axiosInstance.patch(
        `${apiEndpoints.updateTodo}/${modalData}`,
        payload,
      );
      toast.success("Todo updated successfully!");
      reset();
      setIsOpen(false);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Failed to update todo. Please try again.");
    }
  };

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 h-full w-full bg-black opacity-80"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="overflow-visible rounded-lg bg-white sm:w-4xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="absolute top-0 right-0 pt-3 pr-3">
              <button
                type="button"
                className="rounded-md p-2 text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="border-b border-gray-200 px-6 py-4">
              <h3 className="font-medium text-gray-900">Update task</h3>
            </div>
            <div className="flex flex-col-reverse md:flex-row">
              <div className="flex flex-col justify-between md:w-80 md:border-r md:border-gray-200">
                <div className="flex-1 grow">
                  <div className="border-t border-gray-200 p-6 md:border-none">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex shrink-0 items-center justify-center rounded-md bg-gray-100 p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="w-full md:w-[14rem]">
                        <h3 className="truncate text-base font-medium text-gray-900">
                          {todos.data?.title}
                        </h3>
                      </div>
                    </div>
                    <div className="my-6 w-[15rem] border-t border-gray-200"></div>
                    <h4 className="text-base font-medium text-gray-900">
                      Description:
                    </h4>
                    <p className="mt-1 truncate text-base leading-6 text-gray-500">
                      {todos.data?.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 p-6">
                  <button
                    type="button"
                    className="cursor-pointer rounded-md py-2 text-sm font-medium whitespace-nowrap text-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="cursor-pointer rounded-md bg-blue-500 px-3 py-2 text-sm font-medium whitespace-nowrap text-white hover:bg-blue-600"
                  >
                    Update
                  </button>
                </div>
              </div>
              <div className="flex-1 space-y-6 p-6 md:px-6 md:pt-6 md:pb-20">
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-base text-gray-700">
                      1
                    </div>
                    <label
                      htmlFor="connection"
                      className="text-base font-medium text-gray-900"
                    >
                      Title
                    </label>
                  </div>
                  <input
                    type="text"
                    defaultValue={todos.data?.description}
                    id="title"
                    {...register("title")}
                    autoComplete="given-name"
                    placeholder="First name"
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-base text-gray-700">
                      2
                    </div>
                    <label
                      htmlFor="dataset"
                      className="text-base font-medium text-gray-900"
                    >
                      Description
                    </label>
                  </div>
                  <textarea
                    id="description"
                    defaultValue={todos.data?.description}
                    {...register("description")}
                    rows={4}
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                  ></textarea>
                </div>

                <div>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-base text-gray-700">
                      4
                    </div>
                    <label
                      htmlFor="import-method"
                      className="text-base font-medium text-gray-900"
                    >
                      Priority
                    </label>
                  </div>

                  <select
                    id="visibility"
                    defaultValue={todos.data?.priority}
                    {...register("priority")}
                    placeholder="Select priority"
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-base text-gray-700">
                      4
                    </div>
                    <label
                      htmlFor="import-method"
                      className="text-base font-medium text-gray-900"
                    >
                      Due date
                    </label>
                  </div>
                  <input
                    type="datetime-local"
                    defaultValue={todos.data?.createdAt}
                    id="date"
                    {...register("date")}
                    placeholder="Enter your task completion date"
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

Model.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  modalData: PropTypes.func.isRequired,
};
