import React from 'react';
import classNames from 'classnames';

function Todo({ todo, todos, setTodos }) {
  const { text, completed } = todo;

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !completed
        }
      }
      return item;
    }));
  }

  return (
    <div className='todo-item'>
      <div className='flex-box'>
        <input 
          type="checkbox" 
          className='checkbox-field' 
          checked={completed}
          onChange={completeHandler}
          />
        <span className={`todo-text ${classNames({ completed: completed })}`}>{text}</span>
      </div>
      <div onClick={deleteHandler} className='trash-btn'>
        <i className='fa-regular fa-trash-can'></i>
      </div>
    </div>
  );
}

export default Todo;
