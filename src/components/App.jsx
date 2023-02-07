import React, { useState } from 'react';
// Importing Components
import Header from './Header/Header';
import Form from './Form/Form';
import TasksCounter from './TasksCounter/TasksCounter';
import EmptyList from './EmptyList/EmptyList';
import TodoList from './TodoList/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />
      <div className='wrapper-block'>
        <Form 
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TasksCounter todos={todos} />
        {todos.length === 0 
          ? <EmptyList /> 
          : <TodoList todos={todos} setTodos={setTodos} />
        }
      </div>
    </>
  );
}

export default App;
