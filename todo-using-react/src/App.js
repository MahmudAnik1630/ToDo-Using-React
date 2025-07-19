import React from 'react';
import TodoApp from './TodoApp';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
      <TodoApp />
      </div>
      <Footer/>
    </div>
  );
}

export default App;