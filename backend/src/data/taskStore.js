const tasks = [
  {
    id: '1',
    title: 'task 1',
    completed: false,
    createdAt: new Date().toISOString()
  }
];

export const getAllTasks = () => {
  return tasks;
};

export const addTask = (task) => {
  tasks.push(task);
  return task;
};

export const findTaskById = (id) => {
  return tasks.find((task) => task.id === id);
};

export const deleteTaskById = (id) => {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return null;
  }

  return tasks.splice(index, 1)[0];
};