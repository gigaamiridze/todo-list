import React from 'react';
import clipboard from '../../assets/images/clipboard.svg';

function EmptyList() {
  return (
    <div className='empty-container'>
      <div className='content-box'>
        <img src={clipboard} className='clipboard' alt="Clipboard" />
        <p className='paragraph'>You don't have tasks registered yet</p>
        <p className='paragraph'>Create tasks and organize your to-do items</p>
      </div>
    </div>
  );
}

export default EmptyList;
