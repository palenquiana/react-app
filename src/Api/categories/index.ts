import { Category, InitialCategory } from "../../Type";
import { mapToArray } from "../helpers";

const remove = async (category: Category) => {
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

const save = async (category: InitialCategory, id: string | undefined) => {
  const option = {
    method: id ? "PATCH" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  };
  await fetch(
    id ? `https://react-app-29176-default-rtdb.firebaseio.com/categories/${id}.json` :
    "https://react-app-29176-default-rtdb.firebaseio.com/categories.json"
    ,
    option
  );
};

export const categoriesApi = { getAll, save, remove };
