const apiEndpoints = {
  register: "/api/auth/register/",
  register_code_verification: "/api/auth/verify-two-factor",
  login: "/api/auth/login",
  login_otp_verification: "/api/auth/verify-email-code/",
  user_data: "/api/user/profile/",
  user_data_update: "/api/user/profile-update/",
  addTodo: "/api/todo/add-todo",
  getTodos: "/api/todo/get-todo",
  updateTodo: "/api/todo/",
  deleteTodo: "/api/todo/",
  getTodoById: (id) => `/api/auth/todos/${id}`,
};

export default apiEndpoints;
