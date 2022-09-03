import { useEffect, useState } from "react";
import { categoriesApi } from "../api";
import { Category, InitialCategory } from "../types";


const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);



useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const resp = await categoriesApi.getAll();
    setCategories(resp);
  };

  const getItem = async (id:string) => {
    const resp = await categoriesApi.get(id);
    return resp;
  };


  const save = async (category: InitialCategory, id?: string ) => {
    
    const resp = await categoriesApi.save(category, id);
      get();
  };


  const remove = async (id: string) => {
    const resp = await categoriesApi.remove(id);

    if (resp) {
      get();
    } else {
      // mostrar un error en pantalla
    }
  };

  return { get, getItem, remove, save, categories }
}

export { useCategories }