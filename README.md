# Task Manager Full Stack Assignment

A simple Task Manager app with a React frontend and Express backend.

## Features

- View all tasks
- Add a task
- Mark a task as completed
- Delete a task
- Basic validation
- Loading and error handling

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Storage: In-memory array

## Setup

### Backend
1. Open the `backend` folder in terminal.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend:
   ```bash
   npm.cmd start
   ```

Backend runs on:
```text
http://localhost:5000
```

### Frontend
1. Open the `frontend` folder in terminal.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm.cmd run dev
   ```

Frontend runs on:
```text
http://localhost:5173
```

## Assumptions / Trade-offs

- I used in-memory storage because a database was not required for this assignment.
- The UI is kept simple because functionality and code structure were more important than styling.
- Only the required core features were implemented first to keep the solution small and clean.
