const apiEndpoints = {
  register: "/api/auth/register/",
  register_code_verification: "/api/auth/verify-two-factor",
  login: "/api/auth/login",
  login_otp_verification: "/api/auth/verify-email-code/",
  getTodos: "/api/auth/todos",
  addTodo: "/api/auth/todos/add",
  updateTodo: "/api/auth/todos/update",
  deleteTodo: "/api/auth/todos/delete",
  getTodoById: (id) => `/api/auth/todos/${id}`,
};

export default apiEndpoints;
