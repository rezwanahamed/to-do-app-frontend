const apiEndpoints = {
  getTodos: '/api/todos',
  addTodo: '/api/todos/add',
  updateTodo: '/api/todos/update',
  deleteTodo: '/api/todos/delete',
  getTodoById: (id) => `/api/todos/${id}`
};

export default apiEndpoints;