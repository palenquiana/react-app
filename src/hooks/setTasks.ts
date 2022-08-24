import { useEffect, useState } from "react";
import { tasksApi } from "../api";
import { Task } from "../types";

const useSetTasks = () => {
  const [data, setData] = useState<Task[]>([]);
  const [updateData, setUpdateData] = useState(false);

  useEffect(() => {
    tasksApi.getAll().then((response) => setData(response));
  }, [updateData]);

  const removeAndUpdate = (task: Task) => {
    tasksApi.remove("asd");
    setUpdateData((prevState) => !prevState);
    console.log("funciona");
  };

  return { setData, data, removeAndUpdate };
};

export { useSetTasks };
