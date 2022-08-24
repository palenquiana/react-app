import { Task } from "../../types";
import { mapToArray } from "../helpers";

const add = async (newTask: Task) => {
  const option: RequestInit = {
    method: "POST",
    body: JSON.stringify(newTask),
  };
  await fetch(
    "https://react-app-29176-default-rtdb.firebaseio.com/tasks.json",
    option
  );
};

const remove = async (id: string) => {
  const option = { method: "DELETE" };

  try {
    const response = await fetch(
      `https://react-app-29176-default-rtdb.firebaseio.com/tasks/${id}.json`,
      option
    );
    return response.ok;
  } catch (err) {
    return null;
  }
};

const getAll = async () => {
  const response = await fetch(
    "https://react-app-29176-default-rtdb.firebaseio.com/tasks.json"
  );
  const data = await response.json();
  return mapToArray(data);
};

const modify = async (task: Task, modifiedTask: Task) => {
  const option = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedTask),
  };
  await fetch(
    `https://react-app-29176-default-rtdb.firebaseio.com/tasks/${task.id}.json`,
    option
  );
};

export const tasksApi = { add, getAll, modify, remove };
