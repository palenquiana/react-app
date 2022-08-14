import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tasksApi } from "../../../Api";
import { AddEditTask } from "../Form";
import { Task } from "../type-task";



const EditTask:FC =()=>{

  const params = useParams()
  const [task, setTask] = useState<Task | undefined>(undefined)


  const loadTask = async () => {
    if(task === undefined) {
      const response:Task[] = await tasksApi.getAll()      
      const data = response.find(task => task.idDB === params.id);
     
      setTask(data)  
    }
  }


  loadTask()
  
    return(
    <>
      <AddEditTask title="Editar tarea" taskTitle={''} />
    
    </>

    )

}

export { EditTask }