import { useEffect, useState } from "react";
import { tasksApi } from "../Api";
import { Task } from "../Type";


const useSetTasks = () => {

    const [data, setData] = useState<Task[]>([]);
    const [updateData, setUpdateData] = useState(false);

    useEffect(() => {
        tasksApi.getAll().then((response) => setData(response));
      }, [updateData]);


    const removeAndUpdate = (task:Task) => {
        tasksApi.remove(task);
        setUpdateData(prevState => !prevState);
        console.log('funciona');  
    }

    

    return { setData, data, removeAndUpdate };
}

export { useSetTasks }