import React from 'react';

function TasksCounter({ todos }) {
  const totalCreated = todos.length;
  const totalCompleted = todos.filter(item => item.completed).length;

  return (
    <div className='tasks-counter'>
      <div className='created'>
        <span className='task-name'>Created tasks</span>
        <div className='circle'>{totalCreated}</div>
      </div>
      <div className='completed'>
        <span className='task-name'>Completed</span>
        <div className='circle'>{totalCompleted} out of {totalCreated}</div>
      </div>
    </div>
  );
}

export default TasksCounter;
