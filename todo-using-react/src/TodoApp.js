import React, { useState } from 'react';
import Header from './Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Footer from './Footer';

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    // Check if input is empty
    if (newTask.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    // Check if task already exists
    if (tasks.includes(newTask.trim())) {
      alert('This task already exists!');
      return;
    }

    // Add the task
    setTasks([...tasks, newTask.trim()]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 p-4">
        <div className="max-w-md mx-auto">
          <TaskForm onAddTask={addTask} />
          <TaskList tasks={tasks} onDeleteTask={deleteTask} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TodoApp;