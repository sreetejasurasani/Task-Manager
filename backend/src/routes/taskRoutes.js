import express from 'express';
import {
  getTasks,
  createTask,
  updateTaskStatus,
  deleteTask
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.patch('/tasks/:id', updateTaskStatus);
router.delete('/tasks/:id', deleteTask);

export default router;