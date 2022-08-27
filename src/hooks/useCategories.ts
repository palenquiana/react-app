import { useEffect, useState } from "react";
import { categoriesApi } from "../api";
import { Category } from "../types";


const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);


useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const resp = await categoriesApi.getAll();
    setCategories(resp);
  };


  const save = (id: string) => {
    // const resp = categoriesApi.save(id);

    // if (resp) {
    //   get();
    // }
  };

  const remove = async (id: string) => {
    const resp = await categoriesApi.remove(id);

    if (resp) {
      get();
    } else {
      // mostrar un error en pantalla
    }
  };

  return { get, remove, save, categories}
}

export { useCategories }