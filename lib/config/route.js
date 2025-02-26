const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  tasks: '/tasks',
  taskDetail: (taskId) => `/tasks/${taskId}`,
  createTask: '/tasks/create',
  editTask: (taskId) => `/tasks/${taskId}/edit`,
  deleteTask: (taskId) => `/tasks/${taskId}/delete`,
};

export default routes;