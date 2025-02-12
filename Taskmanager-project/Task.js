import React, { useState } from "react";
import "./Task.css";

function Task({ task, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleEdit = () => {
    editTask(task.id, updatedTitle, updatedDescription);
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input className="input-title" type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)}  />
          <textarea className="input-description" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
          <button className="save-button" onClick={handleEdit}>Save</button>
          <button className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="task-buttons">
            <button onClick={() => toggleComplete(task.id)}>{task.completed ? "Undo" : "Done"}</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Task;
