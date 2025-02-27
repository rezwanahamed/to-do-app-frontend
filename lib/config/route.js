const appRoutes = {
  home: "/",
  login: "/login",
  register: "/register",
  qr_verification: "qr-verification",
  dashboard: "/dashboard",
  pending_task: "pending-tasks",
  completed_task: "completed-tasks",
  high_priority_task: "high-priority-task",
  medium_priority_task: "medium-priority-task",
  low_priority_task: "low-priority-task",
  taskDetail: (taskId) => `/tasks/${taskId}`,
  createTask: "/tasks/create",
  editTask: (taskId) => `/tasks/${taskId}/edit`,
  deleteTask: (taskId) => `/tasks/${taskId}/delete`,
};

export default appRoutes;
