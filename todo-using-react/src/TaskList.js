import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">
        My Tasks ({tasks.length})
      </h2>
      
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No tasks yet...!
        </p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <TaskItem 
              key={index} 
              task={task} 
              onDelete={() => onDeleteTask(task)} 
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;