import create from 'zustand'

const useStore = create(set => ({
  tasks: [{ "id": 1,
  "text": "Doctors Appointment",
  "time":'2pm'
},
 
  { "id": 2,
  "text": "Gym",
  "time":'4pm'


  }],
 addtask: (task) => set(state => ({ tasks:[...state.tasks,task] })),
 deletetask:(taskId)=>set(state=>({tasks:state.tasks.filter((task)=>task.id!==taskId)}))
  
}))


export default useStore