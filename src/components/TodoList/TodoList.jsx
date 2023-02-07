import React from 'react';
// Importing Component
import Todo from '../Todo/Todo';

function TodoList({ todos, setTodos }) {
  return (
    <div className='todo-list'>
      {todos.map(todo => (
        <Todo 
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;
