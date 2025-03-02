import { Ghost } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import apiEndpoints from "../../../../lib/config/api";
import axiosInstance from "../../../../lib/config/axiosInstance";
import Modal from "../components/Modal";
import DashboardCard from "./DashboardCard";

export default function CommonLayout({ title, query, queryTag }) {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [selectedTodo, settSelectedTodo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `${apiEndpoints.getTodos}?${query}=${queryTag}`,
        );
        setTodos(response.data.data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const handleUpdateTodo = async (id) => {
    try {
      await axiosInstance.patch(`${apiEndpoints.updateTodo}${id}`, {
        status: "Completed",
      });

      toast.success("Todo updated successfully!");
    } catch (error) {
      toast.error("Failed to update todo. Please try again.");
      console.error("Failed to update todo:", error);
    }
  };
  const handleDeleteTodo = async (id) => {
    try {
      await axiosInstance.delete(`${apiEndpoints.deleteTodo}${id}`);

      toast.success("Todo deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete todo. Please try again.");
      console.error("Failed to update todo:", error);
    }
  };

  return (
    <>
      {todos.length > 0 ? (
        <>
          {" "}
          <div className="px-5 py-3">
            <div className="items-center justify-between space-x-2 md:flex">
              <h3 className="pb-2 font-semibold text-gray-900 md:mb-0 md:text-xl">
                {title}
              </h3>
            </div>
            <div className="my-3 mb-2 h-px bg-gray-200" />{" "}
            {/* Custom Divider */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {todos?.map((todo) => (
                <DashboardCard
                  key={todo?._id}
                  todo={todo}
                  settSelectedTodo={settSelectedTodo}
                  setIsOpen={setIsOpen}
                  handleUpdateTodo={handleUpdateTodo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-96 items-center justify-center gap-2 text-gray-400">
          <p>No task found</p> <Ghost className="h-4 w-4" />
        </div>
      )}

      {isOpen && <Modal setIsOpen={setIsOpen} modalData={selectedTodo} />}
    </>
  );
}

CommonLayout.propTypes = {
  title: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  queryTag: PropTypes.string.isRequired,
};
