import React from 'react'
import useStore from '../DB/store'
import Button from './Button'

const Task = ({text,id,time}) => {

    const del=useStore((state)=>state.deletetask)

    const deleteTask=(taskId)=>{
   del(id)
    }
    return (
        <div className="task" key={id}>
           <h4>{text}</h4> 
            <p>Time : {time}</p>
           <Button text="delete" onClick={()=>deleteTask(id)}/>
          
        </div>
    )
}

export default Task
