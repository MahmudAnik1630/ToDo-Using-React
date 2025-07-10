import React from 'react';

function TaskItem({ task, onDelete }) {
  return (
    <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
      <span className="text-gray-800">{task}</span>
      <button
        onClick={onDelete}
        className="text-red-600 hover:text-red-800 font-medium"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;