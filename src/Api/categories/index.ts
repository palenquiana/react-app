import { Category } from "../../Type";

const addCategory = async (newCategory: Category) => {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCategory),
  };
  await fetch(
    "https://react-app-29176-default-rtdb.firebaseio.com/categories.json",
    option
  );
};

const deleteCategory = async (category: Category) => {
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

const getCategories = async () => {
  const response = await fetch(
    "https://react-app-29176-default-rtdb.firebaseio.com/categories.json"
  );
  const data = await response.json();
  return data;
};

const saveCategory = async (category: Category | undefined, slug: string) => {
  const option = {
    method: slug ? "PATCH" : "POST",
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

export { addCategory, getCategories, saveCategory, deleteCategory };
