import { InitialTask } from "../../types";
import { mapToArray } from "../helpers";


const remove = async (id: string) => {
    const option = { method: "DELETE" };
    try {
      const response = await fetch(
        `https://react-app-29176-default-rtdb.firebaseio.com/tasks/${id}.json`,
        option
      );
      return response.ok;
    } catch (err) {
      return undefined;
    }
  };


const getAll = async () => {
  const response = await fetch(
    "https://react-app-29176-default-rtdb.firebaseio.com/tasks.json"
  );
  const data = await response.json();
  return mapToArray(data);
};


const save = async (task?: InitialTask, id?: string | undefined) => {
  const option = {
    method: id ? "PATCH" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  };
  await fetch(
    id
      ? `https://react-app-29176-default-rtdb.firebaseio.com/tasks/${id}.json`
      : `https://react-app-29176-default-rtdb.firebaseio.com/tasks.json`,
    option
  );
};

export const tasksApi = { getAll, remove, save };