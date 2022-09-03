import { Category, InitialCategory } from "../../types";
import { mapToArray } from "../helpers";

const remove = async (id: string) => {
  const option = {
    method: "DELETE"};
  try {
    const response = await fetch(
      `https://react-app-29176-default-rtdb.firebaseio.com/categories/${id}.json`,
      option
    );
    return response.ok;
  } catch (err) {
    return undefined;
  }
}

const getAll = async () => {
  const response = await fetch(
    "https://react-app-29176-default-rtdb.firebaseio.com/categories.json"
  );
  const data = await response.json();
  return mapToArray(data);
};


const get = async (id:string) => {
  const response = await fetch(
    `https://react-app-29176-default-rtdb.firebaseio.com/categories/${id}.json`
  );
  const data = await response.json();
  return data;
};

const save = async (category: InitialCategory, id?: string) => {
  const option = {
    method: id ? "PATCH" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  };
  await fetch(
    `https://react-app-29176-default-rtdb.firebaseio.com/categories${id ? '/' + id : ''}.json`,
    option
  );
};

export const categoriesApi = { getAll, save, remove, get };
