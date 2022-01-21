
import { useRef } from "react";
import useStore from "../DB/store";
import Button from "./Button"


const AddTask = (props) => {
    const add=useStore((state)=>state.addtask);

 
    const taskRef = useRef();
    const timeRef = useRef();
  
  
    const handleClick = () => {
        const d = new Date();
var t={
 'id':d.getTime(),
 'text':taskRef.current.value,
 'time':timeRef.current.value
};

add(t);
    };

    
    return (
        <div className={props.classForm}>
              <input ref={taskRef} placeholder="ex: Meeting with john doe"></input>
              <input ref={timeRef} placeholder="ex: 2 pm " ></input>
              <div style={{display:'flex',justifyContent:"center"}}>
              <Button text="Add Task" onClick={handleClick}/>
              </div>
            
        </div>
    )
}

export default AddTask
