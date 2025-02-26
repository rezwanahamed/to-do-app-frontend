const apiEndpoints = {
  register: '/api/auth/register/',
  getTodos: '/api/auth/todos',
  addTodo: '/api/auth/todos/add',
  updateTodo: '/api/auth/todos/update',
  deleteTodo: '/api/auth/todos/delete',
  getTodoById: (id) => `/api/auth/todos/${id}`
};

export default apiEndpoints;