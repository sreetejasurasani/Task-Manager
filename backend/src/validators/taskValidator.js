export const validateCreateTask = (body) => {
  const errors = [];

  if (!body.title || typeof body.title !== 'string' || !body.title.trim()) {
    errors.push('title is required and must be a non-empty string');
  }

  return errors;
};

export const validateUpdateTask = (body) => {
  const errors = [];

  if (typeof body.completed !== 'boolean') {
    errors.push('completed is required and must be a boolean');
  }

  return errors;
};