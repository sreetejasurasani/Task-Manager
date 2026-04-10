function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          marginRight: '10px'
        }}
      >
        {task.title}
      </span>

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id, !task.completed)}
      />

      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;