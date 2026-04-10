import { nanoid } from 'nanoid';
import { getAllTasks, addTask, findTaskById, deleteTaskById } from '../data/taskStore.js';
import { validateCreateTask, validateUpdateTask } from '../validators/taskValidator.js';

export const getTasks = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Tasks fetched successfully',
    data: getAllTasks()
  });
};

export const createTask = (req, res) => {
  const errors = validateCreateTask(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  const newTask = {
    id: nanoid(),
    title: req.body.title.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };

  addTask(newTask);

  res.status(201).json({
    success: true,
    message: 'Task created successfully',
    data: newTask
  });
};

export const updateTaskStatus = (req, res) => {
  const errors = validateUpdateTask(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  const task = findTaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }

  task.completed = req.body.completed;

  res.status(200).json({
    success: true,
    message: 'Task updated successfully',
    data: task
  });
};

export const deleteTask = (req, res) => {
  const deletedTask = deleteTaskById(req.params.id);

  if (!deletedTask) {
    return res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }

  res.status(200).json({
    success: true,
    message: 'Task deleted successfully',
    data: deletedTask
  });
};