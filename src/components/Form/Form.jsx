import React, { useRef, useEffect } from 'react';
import plus from '../../assets/images/plus.svg';
import { v4 as uuid } from 'uuid';

function Form({ inputText, setInputText, todos, setTodos }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const uniqueId = uuid();

  const handleChange = (event) => {
    setInputText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: uniqueId,
        text: inputText,
        completed: false
      }
    ]);
    setInputText('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className='input-field' 
          placeholder='Add new task' 
          name='task'
          value={inputText}
          onChange={handleChange}
          ref={inputRef}
        />
        <button type='submit' className='submit-btn'>
          Create
          <img src={plus} className='plus' alt="Plus" />
        </button>
      </form>
    </>
  );
}

export default Form;
