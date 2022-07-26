import { useEffect, useState } from "react";
import { tasksApi } from "../api";
import { Task } from "../types";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    setIsLoading(true);
    const resp = await tasksApi.getAll();
    setTasks(resp);
    setIsLoading(false);
  };

  const save = async (task: Task) => {
    const resp = await tasksApi.save(task);

    if (resp !== undefined) {
      get();
    }
  };

  const remove = async (id: string) => {
    const resp = await tasksApi.remove(id);

    if (resp) {
      get();
    } else {
      // mostrar un error en pantalla
    }
  };

  return { tasks, isLoading, save, remove };
};

export { useTasks };
