import React, { useState } from 'react';

function TodoApp() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleAdd = () => {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem('');
    }
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div className="todo-app max-w-md mx-auto p-4">
      <input
        onChange={handleChange}
        value={item}
        type="text"
        placeholder="Add a new todo"
        className="p-2 border rounded w-full max-w-md mx-auto my-4"
      />
      <button
        onClick={handleAdd}
        className="bg-amber-700 text-white p-2 rounded w-full max-w-md mx-auto"
      >
        Add Todo
      </button>

      <div className="mt-4">
        {list.map((todo, index) => (
          <div key={index} className="flex justify-between items-center my-2 border p-2 rounded">
            <h1 className="text-xl capitalize">{todo}</h1>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 text-xl ml-4"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
