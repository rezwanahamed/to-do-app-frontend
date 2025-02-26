const appRoutes = {
  home: "/",
  login: "/login",
  register: "/register",
  qr_verification: "qr-verification",
  dashboard: "/dashboard",
  tasks: "/tasks",
  taskDetail: (taskId) => `/tasks/${taskId}`,
  createTask: "/tasks/create",
  editTask: (taskId) => `/tasks/${taskId}/edit`,
  deleteTask: (taskId) => `/tasks/${taskId}/delete`,
};

export default appRoutes;
