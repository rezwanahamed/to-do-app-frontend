const apiEndpoints = {
  register: "/api/auth/register/",
  register_code_verification: "/api/auth/verify-two-factor",
  login: "/api/auth/verify-two-factor",
  getTodos: "/api/auth/todos",
  addTodo: "/api/auth/todos/add",
  updateTodo: "/api/auth/todos/update",
  deleteTodo: "/api/auth/todos/delete",
  getTodoById: (id) => `/api/auth/todos/${id}`,
};

export default apiEndpoints;
