import { AlarmClock, Ghost, Siren } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import apiEndpoints from "../../../../lib/config/api";
import axiosInstance from "../../../../lib/config/axiosInstance";
import DashboardCard from "../components/DashboardCard";
import Model from "../components/Modal";

export default function Dashboard() {
  const [dateFilter, setDateFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [selectedTodo, settSelectedTodo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `${apiEndpoints.getTodos}?status=Pending&date=${dateFilter}&priority=${priorityFilter}&limit=6`,
        );
        setTodos(response.data.data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const handleFilterDateChange = (event) => {
    setDateFilter(event.target.value);
  };
  const handleFilterPriorityChange = (event) => {
    setPriorityFilter(event.target.value);
  };

  const handleUpdateTodo = async (id) => {
    try {
      await axiosInstance.patch(`${apiEndpoints.updateTodo}/${id}`, {
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
      await axiosInstance.delete(`${apiEndpoints.deleteTodo}/${id}`);

      toast.success("Todo deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete todo. Please try again.");
      console.error("Failed to update todo:", error);
    }
  };

  return (
    <div className="px-5 py-3">
      <div className="items-center justify-between space-x-2 md:flex">
        <h3 className="mb-4 font-semibold text-gray-900 md:mb-0 md:text-xl">
          All To-Do
        </h3>

        <div className="button-group flex gap-3">
          <div className="font-geist flex cursor-pointer items-center justify-center rounded-md border border-slate-200 pr-1 pl-5 text-sm text-slate-600">
            <AlarmClock className="h-4 w-4" />
            <select
              value={dateFilter}
              onChange={handleFilterDateChange}
              className="cursor-pointer border-0 text-sm focus-visible:ring-0"
            >
              <option value="">All Dates</option>
              <option value="today">Today</option>
              <option value="thisWeek">This Week</option>
              <option value="thisMonth">This Month</option>
            </select>
          </div>

          <div className="button-group flex gap-2">
            <div className="font-geist flex cursor-pointer items-center justify-center rounded-md border border-slate-200 pr-1 pl-5 text-sm text-slate-600">
              <Siren className="h-4 w-4" />
              <select
                value={priorityFilter}
                onChange={handleFilterPriorityChange}
                className="cursor-pointer border-0 text-sm focus-visible:ring-0"
              >
                <option value="">All status</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 mb-2 h-px bg-gray-200" />

      <>
        {todos.length > 0 ? (
          <>
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
          </>
        ) : (
          <div className="flex h-96 items-center justify-center gap-2 text-gray-400">
            <p>No task found</p> <Ghost className="h-4 w-4" />
          </div>
        )}

        {isOpen && <Model setIsOpen={setIsOpen} modalData={selectedTodo} />}
      </>
    </div>
  );
}
