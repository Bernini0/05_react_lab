import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TaskManager.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const handleAddTask = () => {
    if (newTaskName.trim() === "" || newTaskDescription.trim() === "") {
      alert("Please enter both task name and description.");
      return;
    }

    const newTask = {
      name: newTaskName,
      description: newTaskDescription,
    };

    if (editingTaskIndex !== null) {
      // Editing existing task
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex] = newTask;
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
    } else {
      // Adding new task
      setTasks([...tasks, newTask]);
    }

    setNewTaskName("");
    setNewTaskDescription("");
    setIsAddingTask(false);
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setNewTaskName(taskToEdit.name);
    setNewTaskDescription(taskToEdit.description);
    setIsAddingTask(true);
    setEditingTaskIndex(index);
  };

  const handleDeleteTask = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="container mt-5">
      <button
        className="btn btn-primary"
        onClick={() => {
          setIsAddingTask(true);
          setEditingTaskIndex(null);
        }}
      >
        Add New Task
      </button>

      {isAddingTask && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">New Task</h5>
            <div className="mb-3">
              <label htmlFor="taskName" className="form-label">
                Task Name
              </label>
              <input
                type="text"
                className="form-control"
                id="taskName"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="taskDescription" className="form-label">
                Task Description
              </label>
              <textarea
                className="form-control"
                id="taskDescription"
                rows="3"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
              ></textarea>
            </div>
            <button
              className="btn btn-success"
              onClick={handleAddTask}
            >
              {editingTaskIndex !== null ? "Update Task" : "Save Task"}
            </button>
          </div>
        </div>
      )}

      <div className="mt-3">
        {tasks.map((task, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h5 className="card-title">{task.name}</h5>
              <p className="card-text">{task.description}</p>
              <button
                className="btn btn-warning me-2"
                onClick={() => handleEditTask(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;