export const addTodo = (data) => {
  return {
    type: "todo/addTodo",
    payload: data,
  };
};

export const checkedComplete = (todoId) => {
  return {
    type: "todo/checkedComplete",
    payload: { id: todoId },
  };
};

export const searchFilter = (search) => {
  return {
    type: "filters/searchFilter",
    payload: search,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilter",
    payload: status,
  };
};

export const priorityFilter = (priorities) => {
  return {
    type: "filters/priorityFilter",
    payload: priorities,
  };
};
