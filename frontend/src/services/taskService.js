const API_URL = 'https://task-manager-t6d9.onrender.com/api';

export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch tasks');
  }

  return data;
};

export const createTask = async (title) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to create task');
  }

  return data;
};

export const updateTaskStatus = async (id, completed) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ completed })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to update task');
  }

  return data;
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'DELETE'
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to delete task');
  }

  return data;
};