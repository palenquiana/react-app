import { InitialUser } from "../../Type";
import { mapToArray } from "../helpers";

const remove = async (user: any) => {
  const option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  await fetch(
    `https://react-app-29176-default-rtdb.firebaseio.com/users/${user}.json`,
    option
  );
};

const getAll = async () => {
  const response = await fetch(
    "https://react-app-29176-default-rtdb.firebaseio.com/users.json"
  );
  const data = await response.json();
  return mapToArray(data);
};

const save = async (user: InitialUser, id: string | undefined) => {
  const option = {
    method: id ? "PATCH" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  await fetch(
    id
      ? `https://react-app-29176-default-rtdb.firebaseio.com/categories/${id}.json`
      : `https://react-app-29176-default-rtdb.firebaseio.com/categories.json`,
    option
  );
};

export const usersApi = { getAll, remove, save };
