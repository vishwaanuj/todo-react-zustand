import React from 'react'
import useStore from '../DB/store';
import Button from './Button';
import Task from './Task';
 
export const Tasks = (props) => {

    
    const tasks=useStore(state=>state.tasks);


    
    return (
    <div className='Tasks'>
  
              {tasks.map((task)=><Task text={task.text} time={task.time} id={task.id}/>)}  
              
    </div>
    )
}
