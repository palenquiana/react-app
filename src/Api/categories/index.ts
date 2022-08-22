import { Category, SaveCategory } from "../../Type";
import { mapToArray } from "../helpers";

const add = async (newCategory: any) => {
  const option: RequestInit = {
    method: "POST",
    body: JSON.stringify(newCategory),
  };
  await fetch(
    "https://react-app-29176-default-rtdb.firebaseio.com/categories.json",
    option
  );
};

const remove = async (category: any) => {
  const option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  };
  await fetch(
    `https://react-app-29176-default-rtdb.firebaseio.com/categories/${category}.json`,
    option
  );
};

const getAll = async () => {
  const response = await fetch(
    "https://react-app-29176-default-rtdb.firebaseio.com/categories.json"
  );
  const data = await response.json();
  return mapToArray(data);
};

const save = async (category: SaveCategory, id: string | undefined) => {
  const option = {
    method: id ? "PATCH" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  };
  await fetch(
    `https://react-app-29176-default-rtdb.firebaseio.com/categories/${id}.json`,
    option
  );
};

export const categoriesApi = { add, getAll, save, remove };
