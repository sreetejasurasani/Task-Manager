# Task Manager Full Stack Assignment

A simple full-stack Task Manager app built with a React frontend and an Express backend.

## Live Demo
- Frontend: https://sreetejasurasani.github.io/Task-Manager/
- Backend/API: https://task-manager-t6d9.onrender.com

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

## Project Structure
- `frontend/` - React application
- `backend/` - Express API

## Setup Instructions

### Backend
1. Open the `backend` folder in terminal.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend:
   ```bash
   npm start
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
   npm run dev
   ```

Frontend runs on:
```text
http://localhost:5173
```

## API Endpoints
- `GET /tasks` - Fetch all tasks
- `POST /tasks` - Create a new task
- `PATCH /tasks/:id` - Mark a task as completed
- `DELETE /tasks/:id` - Delete a task

## Assumptions / Trade-offs
- In-memory storage was used because a database was not required for this assignment.
- The UI was kept simple to focus on functionality and clean code structure.
- Only the core features were implemented to keep the solution small and complete.

## Submission Note
This solution reflects a normal coding approach for a small feature and focuses on clarity, correctness, and sensible trade-offs.